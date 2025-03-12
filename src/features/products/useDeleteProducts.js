import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct as deleteProductFn } from '../../services/apiProducts';
import { toast } from 'react-toastify';

export function useDeleteProducts() {
  const queryClient = useQueryClient();

  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    mutationFn: ({ id, image }) => deleteProductFn(id, image),
    onSuccess: () => {
      toast.success('new Product successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteProduct, isDeleting };
}
