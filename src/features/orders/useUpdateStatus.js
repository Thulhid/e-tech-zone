import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStatus as updateStatusFn } from '../../services/apiOrders';
import toast from 'react-hot-toast';

export function useUpdateStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateStatus, isPending: isStatusUpdating } = useMutation({
    mutationFn: ({ id, status }) => updateStatusFn(id, status),
    onSuccess: ([data]) => {
      const { id, status } = data;
      queryClient.invalidateQueries({ queryKey: ['order'] });
      toast.success(`#${id} status updated to ${status}`);
    },
  });

  return { updateStatus, isStatusUpdating };
}
