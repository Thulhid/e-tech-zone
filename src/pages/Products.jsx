import CreateProductForm from '../features/products/CreateProductForm';
import ProductTable from '../features/products/ProductTable';
import AddProduct from '../features/products/AddProduct';
import { HiBars3 } from 'react-icons/hi2';
import ProductTableOperations from '../features/products/ProductTableOperations';

function Products() {
  return (
    <div className="relative">
      <h1 className="m-2 ml-4 text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl dark:text-slate-200">
        All products
      </h1>

      <AddProduct />
      <ProductTableOperations />
      <ProductTable />
    </div>
  );
}

export default Products;
