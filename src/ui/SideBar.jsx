import MainNav from '../ui/MainNav';
import Logo from './Logo';
import Uploader from '../data/Uploader';

function SideBar() {
  return (
    <aside className="row-[1/-1] hidden bg-sky-100 px-1 py-2 xl:block dark:bg-sky-800">
      <Logo containerStyle="mb-12 flex w-auto flex-col justify-center gap-2 text-center" />
      <MainNav styles="rounded-lg border border-slate-600 bg-sky-100 shadow-md xl:mt-0 xl:flex xl:flex-col xl:items-center xl:gap-1 xl:rounded xl:border-none xl:bg-transparent xl:shadow-none" />
      {/* <Uploader /> */}
    </aside>
  );
}

export default SideBar;
