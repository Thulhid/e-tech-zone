import { ImSpinner2 } from 'react-icons/im';
import Table from '../../ui/Table';
import ProductRow from './ProductRow';
import { useProducts } from './useProducts';
import Empty from '../../ui/Empty';
import Spinner from '../../ui/Spinner';
import Pagination from '../../ui/Pagination';

function ProductTable() {
  const { products, count, isPending } = useProducts();

  if (isPending) return <Spinner />;
  if (!products.length) return <Empty resourceName="products" />;

  //Note: Client side filter and Sorting
  // const filterValue = searchParams.get('discount') || 'all';

  // let filteredProducts;

  // if (filterValue === 'all') filteredProducts = products;
  // if (filterValue === 'no-discount')
  //   filteredProducts = products?.filter((product) => product.discount === 0);
  // if (filterValue === 'with-discount')
  //   filteredProducts = products?.filter((product) => product.discount !== 0);

  // const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  // const [field, direction] = sortBy.split('-');
  // const modifier = direction === 'asc' ? 1 : -1;
  // const sortedProducts = filteredProducts.sort((a, b) => {
  //   if (typeof a[field] === 'string') {
  //     return a[field].localeCompare(b[field]) * modifier; // String comparison
  //   }
  //   return (a[field] - b[field]) * modifier; // Number comparison
  // });
  return (
    <Table>
      <Table.Header styles="grid md:grid-cols-[1.8fr_5fr_5fr_4fr_6fr_1fr]  sm:grid-cols-[1fr_3fr_2.5fr_2.5fr_3fr_1fr] grid-cols-[0.05fr_3fr_2.5fr_2.5fr_3fr] grid-rows-1 items-center text-xs font-medium text-slate-700 uppercase sm:h-10 md:text-base p-2 sm:p-0 dark:text-slate-100">
        <div></div>
        <div>Product</div>
        <div>Regular Price</div>
        <div>Discount</div>
        <div>Description</div>
        <div></div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={products}
        render={(product) => <ProductRow product={product} key={product.id} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default ProductTable;
