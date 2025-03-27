import MainNav from './MainNav';

function DynamicSideBar() {
  return (
    <div className="top-5 z-1001 col-1 mt-8 xl:hidden">
      <MainNav styles="dark:bg-sky-900 rounded-lg border border-sky-300 overflow-hidden shadow-lg" />
    </div>
  );
}

export default DynamicSideBar;
