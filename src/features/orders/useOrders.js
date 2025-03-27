import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getOrders } from '../../services/apiOrders';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';
import toast from 'react-hot-toast';

export function useOrders() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  //Sort
  const sortByRaw = searchParams.get('sortBy') || 'created_at-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  //pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const { data: { data: orders, count } = {}, isPending } = useQuery({
    queryKey: ['orders', filter, sortBy, page],
    queryFn: () => getOrders({ filter, sortBy, page }),
    onError: () => toast.error('Orders could not be loaded'),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  //pre-fetching
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['orders', filter, sortBy, page + 1],
      queryFn: () => getOrders({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['orders', filter, sortBy, page - 1],
      queryFn: () => getOrders({ filter, sortBy, page: page - 1 }),
    });
  return { orders, count, isPending };
}
