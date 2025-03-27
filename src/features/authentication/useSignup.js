import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address.",
        {
          duration: 8000,
          icon: '✉️',
          className: '!bg-green-600 !text-white',
        },
      );
    },

    // onError: (error) => {
    //   toast.error(`${error.message}!`);
    // },
  });

  return { signup, isPending };
}
