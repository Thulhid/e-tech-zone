import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      console.log(data);
      navigate('/dashboard', { replace: true });
    },

    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password incorrect');
    },
  });
  return { login, isPending };
}
