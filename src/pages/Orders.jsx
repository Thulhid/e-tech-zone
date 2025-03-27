import OrdersTable from '../features/orders/OrderTable';
import OrderTableOperations from '../features/orders/OrderTableOperations';

function Orders() {
  return (
    <>
      <h1 className="m-2 ml-4 text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl dark:text-slate-200">
        All orders
      </h1>
      <OrderTableOperations />
      <OrdersTable />
    </>
  );
}

export default Orders;
