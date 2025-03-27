import { useOrder } from './useOrder';
import Spinner from '../../ui/Spinner';

import OrderDataBox from './OrderDataBox';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDeleteOrder } from './useDeleteOrder';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Empty from '../../ui/Empty';

function OrderDetails() {
  const { deleteOrder, isDeleting } = useDeleteOrder();
  const { order, isPending } = useOrder();
  const navigate = useNavigate();

  if (isPending) return <Spinner />;
  if (!order) return <Empty resourceName="Order" />;
  const { id, status } = order;

  function handleDeleteOrder() {
    deleteOrder({ id });
    navigate('/orders');
  }
  return (
    <>
      <OrderDataBox order={order} title="Order" />
      <div className="mt-6 mr-5 flex items-center justify-end gap-3 sm:mr-0">
        {status !== 'delivered' && (
          <Button variant="secondary" onClick={() => navigate(`/status/${id}`)}>
            Status
          </Button>
        )}
        <Modal>
          <Modal.Open opens="order-delete">
            <Button variant="danger" disabled={isDeleting}>
              Delete order
            </Button>
          </Modal.Open>
          <Modal.Window name="order-delete">
            <ConfirmDelete resource="order" onConfirm={handleDeleteOrder} />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

export default OrderDetails;
