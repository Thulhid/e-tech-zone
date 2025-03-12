import MainNav from '../ui/MainNav';
import Logo from './Logo';

function SideBar() {
  return (
    <aside className="row-[1/-1] hidden bg-sky-100 px-1 py-2 xl:block">
      <aside />
      <Logo />
      <MainNav />
    </aside>
  );
}
/* 
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';


*/

export default SideBar;
