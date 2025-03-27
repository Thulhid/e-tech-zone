import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/apiAuth';

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return { user, isPending, isAuthenticated: user?.role === 'authenticated' };
}
