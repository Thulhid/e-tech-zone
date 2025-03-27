import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import DynamicSideBar from './DynamicSideBar';

function AppLayout() {
  return (
    <div className="grid h-dvh grid-cols-[1.5rem_1fr] grid-rows-[auto_1fr] lg:gap-4 xl:grid-cols-[18rem_1fr] dark:bg-sky-950">
      <Header />

      <SideBar />
      <DynamicSideBar />
      <main className="overflow-auto rounded-md bg-slate-50 sm:p-5 md:p-7 xl:p-15 dark:bg-sky-900">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
