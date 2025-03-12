import { HiMiniPlus, HiMiniSquaresPlus, HiPlus } from 'react-icons/hi2';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateProductForm from './CreateProductForm';

function AddProduct() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="product-form">
          <span className="absolute top-0 right-7">
            <Button variant="primary">
              <HiPlus /> <span>new Product</span>
            </Button>
          </span>
        </Modal.Open>
        <Modal.Window name="product-form">
          <CreateProductForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddProduct;
//  styles=
//   variant="primary"
