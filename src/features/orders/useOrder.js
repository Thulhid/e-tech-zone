import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../services/apiOrders';
import toast from 'react-hot-toast';

export function useOrder() {
  const { orderId } = useParams();
  const { data: order, isPending } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrder(orderId),

    retry: false,

    onError: () => toast.error('Order details could not be loaded'),
  });
  return { order, isPending };
}
