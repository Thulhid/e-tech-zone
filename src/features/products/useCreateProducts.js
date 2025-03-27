import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateProduct } from '../../services/apiProducts';
import toast from 'react-hot-toast';

export function useCreateProducts() {
  const queryClient = useQueryClient();
  const { mutate: createProduct, isPending: isCreating } = useMutation({
    mutationFn: createUpdateProduct,
    onSuccess: () => {
      toast.success('new Product successfully created');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createProduct, isCreating };
}
