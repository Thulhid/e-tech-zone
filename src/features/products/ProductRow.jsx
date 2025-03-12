import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import Menus from '../../ui/Menus';
import Modal from '../../ui/Modal';
import Table from '../../ui/Table';
import { formatCurrency } from '../../utils/helper';
import CreateProductForm from './CreateProductForm';
import { useCreateProducts } from './useCreateProducts';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteProducts } from './useDeleteProducts';

function ProductRow({ product }) {
  const { deleteProduct, isDeleting } = useDeleteProducts();
  const { createProduct, isCreating } = useCreateProducts();

  const {
    id: productId,
    name,
    regularPrice,
    discount,
    description,
    image,
  } = product;

  function handleDuplicate() {
    createProduct({
      name: `Copy of ${name}`,
      regularPrice,
      discount,
      description,
      image,
    });
  }

  return (
    <Table.Row>
      <img src={product.image} />
      <div className="ml-1 text-[10px] font-medium md:text-sm md:font-semibold">
        {product.name}
      </div>
      <div className="text-[10px] font-medium md:text-sm md:font-semibold">
        {formatCurrency(product.regularPrice)}
      </div>
      <div className="text-[10px] font-medium text-green-500 md:text-sm md:font-semibold">
        {formatCurrency(product.discount)}
      </div>
      <div className="text-[9px] md:text-xs">{product.description}</div>
      {/*     <div>
       <button className="cursor-pointer">Edit</button>
      </div> */}
      <Modal>
        <Menus>
          <Menus.Toggle id={productId} />
          <Menus.List id={productId}>
            <Menus.ButtonMenu
              variant="small"
              icon={<HiSquare2Stack className="text-slate-500" />}
              onClick={handleDuplicate}
            >
              <span>Duplicate</span>
            </Menus.ButtonMenu>
            <Modal.Open opens="product-update">
              <Menus.ButtonMenu
                variant="small"
                icon={<HiPencil className="text-slate-500" />}
              >
                <span>Edit</span>
              </Menus.ButtonMenu>
            </Modal.Open>
            <Modal.Open opens="product-delete">
              <Menus.ButtonMenu
                variant="small"
                icon={<HiTrash className="text-slate-500" />}
              >
                <span>Delete</span>
              </Menus.ButtonMenu>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="product-update">
            <CreateProductForm productToUpdate={product} />
          </Modal.Window>
          <Modal.Window name="product-delete">
            <ConfirmDelete
              resource="product"
              disabled={isDeleting}
              onConfirm={() =>
                deleteProduct({ id: product.id, image: product.image })
              }
            />
          </Modal.Window>
        </Menus>
      </Modal>
      {/* <Button
        variant="primary"
        onClick={() => deleteProduct({ id: product.id, image: product.image })}
      >
        Delete
      </Button> */}
    </Table.Row>
  );
}

export default ProductRow;
