import { format, isToday, parseISO } from 'date-fns';
import Table from '../../ui/Table';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helper';
import Tag from '../../ui/Tag';
import { HiEye, HiTrash } from 'react-icons/hi';
import Menus from '../../ui/Menus';
import { useNavigate } from 'react-router-dom';
import { HiArrowDownOnSquare } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteOrder } from './useDeleteOrder';

function OrderRow({ order }) {
  const navigate = useNavigate();
  const {
    id: orderId,
    created_at,
    dueDate,
    status,
    totalPrice,
    products: { name: productName },
    customers: { fullName: customerName, email },
  } = order;
  const { deleteOrder } = useDeleteOrder();
  return (
    <Table.Row styles="mb-3 grid md:grid-cols-[3fr_4fr_3.5fr_2fr_3fr_1fr] grid-cols-[3.5fr_2fr_2.5fr_2.5fr_1fr] sm:grid-cols-[3fr_4.5fr_3.5fr_2.5fr_3fr_1fr] grid-rows-1 items-start border-t border-t-slate-300 pt-2 text-slate-700 md:p-2">
      <div className="ml-1 hidden text-[9px] font-medium sm:block md:text-sm dark:text-slate-300">
        {productName}
      </div>
      <div className="flex flex-col">
        <span className="text-xs md:text-sm dark:text-slate-100">
          {customerName}
        </span>
        <span className="max-w-[75px] text-[10px] break-words text-slate-500 md:max-w-xs md:text-xs dark:text-slate-400">
          {email}
        </span>
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-[10px] md:text-sm dark:text-slate-100">
          {isToday(parseISO(created_at))
            ? 'Today'
            : formatDistanceFromNow(created_at)}
        </span>
        <span className="text-[9px] text-slate-500 md:text-xs dark:text-slate-400">
          {format(parseISO(created_at), 'MMM dd yyyy')} &rarr;{' '}
          {format(new Date(dueDate), 'MMM dd yyyy')}
        </span>
      </div>
      <Tag status={status} />
      <div className="text-xs font-medium text-slate-500 md:text-sm md:font-semibold dark:text-slate-200">
        {formatCurrency(totalPrice)}
      </div>
      <Modal>
        <Menus>
          <Menus.Toggle id={orderId} />
          <Menus.List id={orderId}>
            <Menus.ButtonMenu
              icon={
                <HiEye
                  size={18}
                  className="text-slate-500 dark:text-slate-400"
                />
              }
              variant="small"
              onClick={() => navigate(`/orders/${orderId}`)}
            >
              See details
            </Menus.ButtonMenu>
            {status !== 'delivered' && (
              <Menus.ButtonMenu
                icon={
                  <HiArrowDownOnSquare
                    size={18}
                    className="text-slate-500 dark:text-slate-400"
                  />
                }
                variant="small"
                onClick={() => navigate(`/status/${orderId}`)}
              >
                Update status
              </Menus.ButtonMenu>
            )}
            <Modal.Open opens="order-delete">
              <Menus.ButtonMenu
                icon={
                  <HiTrash
                    size={18}
                    className="text-slate-500 dark:text-slate-400"
                  />
                }
                variant="small"
              >
                Delete
              </Menus.ButtonMenu>
            </Modal.Open>
          </Menus.List>
          <Modal.Window name="order-delete">
            <ConfirmDelete
              resource="order"
              onConfirm={() => deleteOrder({ id: orderId })}
            />
          </Modal.Window>
        </Menus>
      </Modal>
    </Table.Row>
  );
}

export default OrderRow;
//
