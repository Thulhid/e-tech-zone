import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateProduct } from '../../services/apiProducts';
import { toast } from 'react-toastify';

export function useUpdateProducts() {
  const queryClient = useQueryClient();

  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: ({ newProduct, id }) => createUpdateProduct(newProduct, id),
    onSuccess: () => {
      toast.success('new Product successfully updated');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (err) => {
      toast.success(err.message);
    },
  });

  return { updateProduct, isUpdating };
}
