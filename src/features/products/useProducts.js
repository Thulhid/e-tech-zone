import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts } from '../../services/apiProducts';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';
import toast from 'react-hot-toast';

export function useProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get('discount');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'discount', value: filterValue };

  //Sort
  const sortByRaw = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };
  //pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const { data: { products, count } = {}, isPending } = useQuery({
    queryKey: ['products', filter, sortBy, page],
    queryFn: () => getProducts({ filter, sortBy, page }),
    onError: () => toast.error('Products could not be loaded'),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  //pre-fetching
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['products', page + 1],
      queryFn: () => getProducts({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['products', page - 1],
      queryFn: () => getProducts({ page: page - 1 }),
    });

  return { products, count, isPending };
}
