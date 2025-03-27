import { HiOutlineUser } from 'react-icons/hi2';
import Logout from '../features/authentication/Logout';
import UserAvatar from '../features/authentication/userAvatar';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import Button from './Button';
import Logo from './Logo';

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="mb-2 flex w-full items-start justify-end gap-1 px-4 pt-3 xl:mb-0">
      <li className="mr-auto" onClick={() => navigate('/dashboard')}>
        <Logo
          logoSize="h-7 w-7"
          containerStyle="m-0 flex gap-1.5 xl:hidden bg-slate-100 rounded-xl shadow"
          textStyle=" hidden"
        />
      </li>
      <li>
        <UserAvatar />
      </li>
      <li>
        <Button variant="header" onClick={() => navigate('/account')}>
          <HiOutlineUser
            // className="text-slate-700 dark:text-slate-100"
            className="h-6 w-6 text-slate-700 md:h-7 md:w-7 dark:text-sky-100"
          />
        </Button>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
