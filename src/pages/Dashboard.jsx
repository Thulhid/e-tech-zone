import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';

function Dashboard() {
  return (
    <>
      <h1 className="m-4 ml-4 text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl dark:text-slate-200">
        Dashboard
      </h1>
      <div className="m-5 ml-auto w-fit">
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
