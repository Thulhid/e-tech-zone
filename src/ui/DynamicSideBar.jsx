import MainNav from './MainNav';

function DynamicSideBar() {
  return (
    <div className="top-5 z-1001 col-1 xl:hidden">
      <MainNav />
    </div>
  );
}

export default DynamicSideBar;
