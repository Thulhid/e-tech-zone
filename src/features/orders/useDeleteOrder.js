import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteOrder as deleteOrderFn } from '../../services/apiOrders';
import toast from 'react-hot-toast';

export function useDeleteOrder() {
  const queryClient = useQueryClient();

  const { mutate: deleteOrder, isPending: isDeleting } = useMutation({
    mutationFn: ({ id }) => deleteOrderFn(id),
    onSuccess: () => {
      toast.success('Order successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteOrder, isDeleting };
}
