import Spinner from '../../ui/Spinner';
import TodayActivity from '../orders/TodayActivity';
import OrdersChart from './OrdersChart';
import SalesChart from './SalesChart';
import Stats from './Stats';
import { useRecentOrders } from './useRecentOrders';

function DashboardLayout() {
  const { orders, numDays, isPending } = useRecentOrders();

  //if (isPending) return <Spinner />;
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-4 md:gap-x-5 md:gap-y-6 xl:grid xl:grid-cols-4">
      <Stats orders={orders} />
      <TodayActivity orders={orders} isPending={isPending} />
      <OrdersChart orders={orders} />
      <SalesChart orders={orders} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;
