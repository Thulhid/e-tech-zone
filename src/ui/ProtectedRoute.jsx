import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //` load auth user
  const { isPending, isAuthenticated } = useUser();

  //2 no auth user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate('/login');
    },
    [isAuthenticated, isPending, navigate],
  );
  //3 spinner
  if (isPending)
    return (
      <div className="flex h-dvh items-start justify-center bg-slate-50">
        <Spinner />
      </div>
    );
  //4.there is a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
