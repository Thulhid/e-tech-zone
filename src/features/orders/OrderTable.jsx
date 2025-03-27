import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import OrderRow from './OrderRow';
import { useOrders } from './useOrders';
import Pagination from '../../ui/Pagination';

function OrdersTable() {
  const { orders, count, isPending, error } = useOrders();

  if (isPending) return <Spinner />;

  return (
    <Table>
      <Table.Header styles="grid md:grid-cols-[3fr_4fr_3.5fr_2fr_3fr_1fr] sm:grid-cols-[3fr_4.5fr_3.5fr_2.5fr_3fr_1fr] grid-cols-[3.5fr_2fr_2.5fr_2.5fr_1fr] grid-rows-1 items-center text-xs font-medium text-slate-700 uppercase md:h-10 md:text-base p-2 dark:text-slate-100">
        <div className="hidden sm:block">Product</div>
        <div>Customer</div>
        <div>Date</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={orders}
        render={(order) => <OrderRow order={order} key={order.id} />}
      ></Table.Body>
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default OrdersTable;
