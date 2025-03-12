import { ImSpinner2 } from 'react-icons/im';
import Table from '../../ui/Table';
import ProductRow from './ProductRow';
import { useProducts } from './useProducts';
import { useSearchParams } from 'react-router-dom';

function ProductTable() {
  const { products, isPending, error } = useProducts();
  const [searchParams] = useSearchParams();

  if (isPending)
    return (
      <div className="flex h-40 items-end justify-center">
        <ImSpinner2 size={60} className="animate-spin text-sky-300" />
      </div>
    );
  const filterValue = searchParams.get('discount') || 'all';

  let filteredProducts;

  if (filterValue === 'all') filteredProducts = products;
  if (filterValue === 'no-discount')
    filteredProducts = products?.filter((product) => product.discount === 0);
  if (filterValue === 'with-discount')
    filteredProducts = products?.filter((product) => product.discount !== 0);

  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (typeof a[field] === 'string') {
      return a[field].localeCompare(b[field]) * modifier; // String comparison
    }
    return (a[field] - b[field]) * modifier; // Number comparison
  });
  return (
    <Table>
      <Table.Header>
        <div></div>
        <div>Product</div>
        <div>Regular Price</div>
        <div>Discount</div>
        <div>Description</div>
        <div></div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={sortedProducts}
        render={(product) => <ProductRow product={product} key={product.id} />}
      />
    </Table>
  );
}

export default ProductTable;
