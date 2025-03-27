import { useMutation } from '@tanstack/react-query';
import { updateIsPaid } from '../../services/apiOrders';

export function useUpdatePaid() {
  const { mutate: updatePaid, isPending: isPaidUpdating } = useMutation({
    mutationFn: ({ id, confirmPaid }) => updateIsPaid(id, confirmPaid),
  });

  return { updatePaid, isPaidUpdating };
}
