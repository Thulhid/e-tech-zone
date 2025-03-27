import Logout from '../features/authentication/Logout';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <div className="span-2 col-2 self-center">
      <HeaderMenu />
    </div>
  );
}

export default Header;
