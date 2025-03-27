import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getOrdersAfterDate } from '../../services/apiOrders';

export function useRecentOrders() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: orders, isPending } = useQuery({
    queryFn: () => getOrdersAfterDate(queryDate),
    queryKey: ['orders', `last-${numDays}`],
  });

  return { orders, isPending, numDays };
}
