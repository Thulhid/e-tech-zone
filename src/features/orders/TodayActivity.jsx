import { format, isToday } from 'date-fns';
import Spinner from '../../ui/Spinner';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { HiOutlineBellSlash } from 'react-icons/hi2';

function TodayActivity({ orders, isPending }) {
  const navigate = useNavigate();
  //if (isPending) return <Spinner />;
  const todayOrders = orders?.filter((order) =>
    isToday(new Date(order.created_at)),
  );
  return (
    <div className="col-span-2 rounded-xl bg-white px-5 py-3 dark:bg-sky-700">
      <h2 className="text-xl font-medium text-slate-500 dark:text-slate-100">
        Today
      </h2>
      {todayOrders?.length ? (
        <div className="flex flex-col gap-2 divide-y divide-slate-300 overflow-auto py-2 dark:divide-sky-900">
          {todayOrders?.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-4 items-start gap-2 space-y-4 py-1"
            >
              <Tag status={order.status} />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                {order.customers.fullName}
              </span>
              <span className="justify-self-center rounded-full text-sm font-medium text-red-600 dark:bg-red-200 dark:px-2 dark:text-red-600">
                {format(order.dueDate, 'dd-MMM')}
              </span>
              <span className="justify-self-center">
                <Button
                  variant="primary"
                  onClick={() => navigate(`/orders/${order.id}`)}
                >
                  Details
                </Button>
              </span>
            </div>
          ))}
        </div>
      ) : isPending ? (
        <Spinner styles="flex justify-center items-center py-20" />
      ) : (
        <p className="flex h-full justify-center gap-1 p-5 xl:items-center dark:text-slate-300">
          <HiOutlineBellSlash size={20} />
          <span>No activities today.</span>
        </p>
      )}
    </div>
  );
}

export default TodayActivity;
