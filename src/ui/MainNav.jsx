import NavItem from './NavItem';
import {
  HiOutlineCog6Tooth,
  HiOutlineCube,
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineUsers,
} from 'react-icons/hi2';

function MainNav({ styles }) {
  return (
    <ul className={styles}>
      <NavItem to={'dashboard'}>
        <HiOutlineHome size={22} />
        <span className="hidden xl:block">Home</span>
      </NavItem>

      <NavItem to={'orders'}>
        <HiOutlineTruck size={22} />
        <span className="hidden xl:block">Orders</span>
      </NavItem>

      <NavItem to={'products'}>
        <HiOutlineCube size={22} />

        <span className="hidden xl:block">Products</span>
      </NavItem>
      <NavItem to={'users'}>
        <HiOutlineUsers size={22} />
        <span className="hidden xl:block">Users</span>
      </NavItem>

      <NavItem to={'settings'}>
        <HiOutlineCog6Tooth size={22} />
        <span className="hidden xl:block">Settings</span>
      </NavItem>
    </ul>
  );
}

export default MainNav;
