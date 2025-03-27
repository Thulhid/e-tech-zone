import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getOrdersAfterDate, getOrdersPaid } from '../../services/apiOrders';

export function useRecentPaidOrders() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: paidOrders, isPending } = useQuery({
    queryFn: () => getOrdersPaid(queryDate),

    queryKey: ['paidOrders', `last-${numDays}`],
  });

  return { paidOrders, isPending };
}
