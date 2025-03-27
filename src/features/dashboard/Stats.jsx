import { HiOutlineChartBar, HiOutlineExclamationCircle } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes, HiOutlineRectangleStack } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helper';
import Spinner from '../../ui/Spinner';

function Stats({ orders }) {
  //1.
  const numOrders = orders?.length;

  //2.
  const numSales = orders?.reduce(
    (acc, order) => (order.isPaid ? acc + order.totalPrice : acc),
    0,
  );
  //3.
  const numPending = orders?.reduce(
    (acc, order) => (order.status === 'pending' ? acc + 1 : acc),
    0,
  );

  //4.
  const PaymentSuccessRate = (
    (orders?.reduce((acc, order) => (order.isPaid ? acc + 1 : acc), 0) /
      numOrders) *
    100
  ).toFixed(2);

  if (!numSales || !numOrders || !numPending || !PaymentSuccessRate)
    return (
      <div className="col-span-full flex justify-center rounded-xl bg-white px-5 py-3 dark:bg-sky-700">
        <Spinner styles="p-8" />
      </div>
    );

  return (
    <>
      <Stat
        title="Orders"
        icon={
          <HiOutlineRectangleStack
            className="h-10 w-10 rounded-full bg-sky-200 p-2 text-sky-800 md:h-15 md:w-15 md:p-3 dark:bg-sky-300"
            strokeWidth={1}
          />
        }
        value={numOrders}
        color="bg-white rounded-xl"
        valueSize="md:text-2xl text-xl"
      />
      <Stat
        title="Pending"
        icon={
          <HiOutlineExclamationCircle
            className="h-10 w-10 rounded-full bg-red-200 p-2 text-red-800 md:h-15 md:w-15 md:p-3 dark:bg-red-300"
            strokeWidth={1}
          />
        }
        value={numPending}
        color="bg-white rounded-xl"
        valueSize="md:text-2xl text-xl"
      />
      <Stat
        title="Sales"
        icon={
          <HiOutlineBanknotes
            className="h-10 w-10 rounded-full bg-green-200 p-2 text-green-800 md:h-15 md:w-15 md:p-3 dark:bg-green-300"
            strokeWidth={1}
          />
        }
        value={formatCurrency(numSales)}
        color="bg-white rounded-xl"
        valueSize="md:text-xl"
      />

      <Stat
        title="Pay Rate"
        icon={
          <HiOutlineChartBar
            className="h-10 w-10 rounded-full bg-amber-200 p-2 text-amber-800 md:h-15 md:w-15 md:p-3 dark:bg-amber-300"
            strokeWidth={1}
          />
        }
        value={`${PaymentSuccessRate}%`}
        color="bg-white rounded-xl"
        valueSize="md:text-xl text-lg"
      />
    </>
  );
}

export default Stats;
