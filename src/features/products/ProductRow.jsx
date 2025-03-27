import {
  HiOutlineMinus,
  HiPencil,
  HiSquare2Stack,
  HiTrash,
} from 'react-icons/hi2';
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
    if (isCreating) return;
    createProduct({
      name: `Copy of ${name}`,
      regularPrice,
      discount,
      description,
      image,
    });
  }

  return (
    <Table.Row styles="mb-3 grid md:grid-cols-[1.8fr_5fr_5fr_4fr_6fr_1fr]  grid-cols-[1fr_3fr_2.5fr_2.5fr_3fr_1fr] grid-rows-1 items-start border-t border-t-slate-300 pt-2 text-slate-700 uppercase">
      <img src={image} />
      <div className="mr-3 ml-1 text-[10px] font-medium md:text-sm dark:text-slate-200">
        {product.name}
      </div>
      <div className="text-[10px] font-medium text-slate-500 md:text-sm md:font-semibold dark:text-slate-100">
        {formatCurrency(regularPrice)}
      </div>
      <div
        className={`text-[10px] font-medium ${discount === 0 ? 'text-slate-500 dark:text-slate-100' : 'text-green-500 dark:text-green-400'} md:text-sm md:font-semibold`}
      >
        {discount === 0 ? <HiOutlineMinus /> : formatCurrency(discount)}
      </div>
      <div className="text-[9px] md:text-xs dark:text-slate-100">
        {description}
      </div>
      {/*     <div>
       <button className="cursor-pointer">Edit</button>
      </div> */}
      <Modal>
        <Menus>
          <Menus.Toggle id={productId} />
          <Menus.List id={productId}>
            <Menus.ButtonMenu
              variant="small"
              icon={
                <HiSquare2Stack
                  size={18}
                  className="text-slate-500 dark:text-slate-400"
                />
              }
              onClick={handleDuplicate}
            >
              Duplicate
            </Menus.ButtonMenu>
            <Modal.Open opens="product-update">
              <Menus.ButtonMenu
                variant="small"
                icon={
                  <HiPencil
                    size={18}
                    className="text-slate-500 dark:text-slate-400"
                  />
                }
              >
                Edit
              </Menus.ButtonMenu>
            </Modal.Open>
            <Modal.Open opens="product-delete">
              <Menus.ButtonMenu
                variant="small"
                icon={
                  <HiTrash
                    size={18}
                    className="text-slate-500 dark:text-slate-400"
                  />
                }
              >
                Delete
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
