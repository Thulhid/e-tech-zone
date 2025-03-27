import {
  HiMiniArrowLeftStartOnRectangle,
  HiOutlineBanknotes,
  HiOutlineBuildingStorefront,
  HiOutlineCube,
  HiOutlineEnvelope,
  HiOutlineIdentification,
  HiOutlinePhone,
  HiOutlineUser,
} from 'react-icons/hi2';
import Tag from '../../ui/Tag';
import { format, parseISO } from 'date-fns';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helper';
import { TbCalendarX } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function OrderDataBox({ order, title }) {
  const {
    id: orderId,
    status,
    created_at,
    dueDate,
    totalPrice,
    isPaid,
    quantity,
    shippingPrice,
    customers: {
      email: customerEmail,
      address: customerAddress,
      fullName: customerFullName,
      nationalId: customerNationalId,
      phoneNumber: customerPhoneNumber,
    } = {},
    products: { id: productId, name: productName, image: productImage } = {},
  } = order;
  return (
    <div>
      <div className="my-5 flex items-center justify-between gap-4.5 sm:gap-6">
        <h1 className="ml-2 text-2xl font-semibold text-slate-700 sm:text-3xl dark:text-slate-200">
          {title} #{orderId}
        </h1>
        <Tag status={status}></Tag>
        {/* <Button variant="secondary" onClick={() => navigate('/orders')}>
            <HiMiniArrowLeftStartOnRectangle className="text-lg" />
            Back
          </Button> */}
        <Link
          to="/orders"
          className="mr-5 ml-auto inline-flex items-center gap-1 overflow-hidden p-1 text-lg text-sky-600 hover:text-sky-500 sm:mr-0 dark:text-sky-200 dark:hover:text-sky-300"
        >
          <HiMiniArrowLeftStartOnRectangle size={20} />
          <span>Back</span>
        </Link>
      </div>
      <section className="m-auto overflow-hidden rounded-lg bg-white shadow dark:bg-sky-800">
        <header className="bg-sky-500 p-3 dark:bg-sky-600">
          <div className="flex items-center justify-between gap-2">
            <HiOutlineCube
              size={22}
              className="text-slate-50"
              style={{ strokeWidth: 2 }}
            />
            <span className="text-xl font-semibold text-slate-50">
              {productName}{' '}
            </span>
            <span className="text-slate-200">{productId}</span>

            <span className="ml-auto font-medium text-slate-200">
              {format(parseISO(created_at), 'dd MMM yyyy')}
            </span>
          </div>
        </header>
        <section>
          <div className="grid grid-cols-[3fr_1fr]">
            <div className="flex w-fit flex-col gap-1 px-5 py-10">
              <span className="inline-flex items-start gap-1 font-semibold text-slate-500 dark:text-slate-100">
                <HiOutlineUser
                  style={{ strokeWidth: 2 }}
                  className="text-sky-500 dark:text-sky-200"
                />

                {customerFullName}
              </span>
              <span className="inline-flex items-start gap-1 text-sm text-slate-500 dark:text-slate-100">
                <HiOutlineBuildingStorefront className="text-sky-500 dark:text-sky-200" />

                {customerAddress}
              </span>
              <span className="inline-flex items-start gap-1 text-sm text-slate-500 dark:text-slate-100">
                <HiOutlinePhone className="text-sky-500 dark:text-sky-200" />

                {customerPhoneNumber}
              </span>
              <span className="inline-flex items-start gap-1 text-sm text-slate-500 dark:text-slate-100">
                {' '}
                <HiOutlineEnvelope className="text-sky-500 dark:text-sky-200" />
                {customerEmail}
              </span>
              <span className="inline-flex items-start gap-1 text-sm text-slate-500 dark:text-slate-100">
                <HiOutlineIdentification className="text-sky-500 dark:text-sky-200" />

                {customerNationalId}
              </span>
              <p className="mt-9 inline-flex items-center gap-2">
                <TbCalendarX
                  size={25}
                  className="text-red-700 dark:text-red-400"
                />
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-50">
                  {format(parseISO(dueDate), 'dd MMM yyyy')}
                </span>
              </p>
            </div>
            <div className="m-3">
              <img src={productImage} />
            </div>
          </div>

          <div
            className={`m-5 flex items-center justify-between gap-1 rounded-md ${isPaid ? 'bg-green-200 text-green-700 dark:bg-green-400 dark:text-green-50' : 'bg-amber-200 text-amber-700 dark:bg-amber-400 dark:text-amber-50'} p-2 text-sm sm:mx-15`}
          >
            <HiOutlineBanknotes
              size={25}
              className={`${isPaid ? 'text-green-600 dark:dark:text-green-100' : 'text-amber-600 dark:text-amber-100'}`}
            />
            <span>Total Price</span>
            <span className="ml-1.5 font-medium">
              {formatCurrency(totalPrice)}
            </span>
            <span className="ml-auto font-semibold uppercase">
              {isPaid ? 'Paid' : 'Will pay'}
            </span>
          </div>
        </section>
        <footer className="m-5 flex justify-end gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-200">
            Quantity: {quantity},
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-200">
            Shipping price: {formatCurrency(shippingPrice)}
          </span>
        </footer>
      </section>
    </div>
  );
}

export default OrderDataBox;
