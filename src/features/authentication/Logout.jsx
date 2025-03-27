import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import Button from '../../ui/Button';
import { ImSpinner2 } from 'react-icons/im';

function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <Button
      variant="header"
      className="p-0"
      disabled={isPending}
      onClick={logout}
    >
      {isPending ? (
        <ImSpinner2 className="h-6 w-6 animate-spin text-slate-700 md:h-7 md:w-7 dark:text-slate-100" />
      ) : (
        <HiArrowRightOnRectangle className="h-6 w-6 text-slate-700 md:h-7 md:w-7 dark:text-slate-100" />
      )}
    </Button>
  );
}

export default Logout;
/* 
size={30} className="text-slate-700 dark:text-slate-100"

*/
