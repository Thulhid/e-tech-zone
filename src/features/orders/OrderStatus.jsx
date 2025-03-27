import { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import OrderDataBox from './OrderDataBox';
import { useOrder } from './useOrder';
import CheckBox from '../../ui/CheckBox';
import { formatCurrency } from '../../utils/helper';
import { useUpdatePaid } from './useUpdatePaid';
import { useUpdateStatus } from './useUpdateStatus';
import { useNavigate } from 'react-router-dom';
import { useDeleteOrder } from './useDeleteOrder';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

function OrderStatus() {
  const { deleteOrder, isDeleting } = useDeleteOrder();
  const { order, isPending } = useOrder();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { updatePaid, isPaidUpdating } = useUpdatePaid();
  const { updateStatus, isStatusUpdating } = useUpdateStatus();
  const navigate = useNavigate();

  useEffect(
    function () {
      setConfirmPaid(order?.isPaid ?? false);
    },
    [order],
  );
  if (isPending) return <Spinner />;
  const {
    id,
    status,
    customers: { fullName: customerFullName },
    totalPrice,
  } = order;

  function handleConfirmPaid() {
    setConfirmPaid((isPaid) => !isPaid);
  }

  function handleStatus(id, status, confirmPaid) {
    updateStatus({ id, status });
    updatePaid({ id, confirmPaid });
    if (status === 'delivered') navigate(`/orders/${id}`);
  }

  function handleDeleteOrder() {
    deleteOrder({ id });
    navigate('/orders');
  }
  return (
    <>
      <OrderDataBox order={order} title="Status order" />
      <CheckBox
        confirmPaid={confirmPaid}
        onChange={() => handleConfirmPaid(confirmPaid)}
        disabled={confirmPaid}
      >
        I confirm {customerFullName} has paid the total amount of{' '}
        {formatCurrency(totalPrice)}
      </CheckBox>
      <div className="mt-6 mr-5 flex items-center justify-between gap-3 sm:mr-0">
        {status === 'pending' && (
          <Button
            variant="shipped"
            onClick={() => handleStatus(id, 'shipped', confirmPaid)}
            disabled={isPaidUpdating || isStatusUpdating}
          >
            Shipped order #{order.id}
          </Button>
        )}

        {status === 'shipped' && (
          <Button
            variant="delivered"
            className="mr-auto"
            disabled={!confirmPaid || isPaidUpdating || isStatusUpdating}
            onClick={() => handleStatus(id, 'delivered', confirmPaid)}
          >
            Delivered order #{order.id}
          </Button>
        )}
        <div className='ml-auto" flex gap-3'>
          <Modal>
            <Modal.Open opens="order-delete">
              <Button
                variant="danger"
                disabled={isDeleting || isPaidUpdating || isStatusUpdating}
              >
                Delete order
              </Button>
            </Modal.Open>
            <Modal.Window name="order-delete">
              <ConfirmDelete resource="order" onConfirm={handleDeleteOrder} />
            </Modal.Window>
          </Modal>
          <Button variant="secondary" onClick={() => navigate('/orders')}>
            Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default OrderStatus;
