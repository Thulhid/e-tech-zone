import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function ProductTableOperations() {
  const searchParamsToReset = [{ name: 'page', value: 1 }];
  return (
    <div className="mb-2 ml-auto w-fit items-center gap-1 sm:mb-3 sm:flex sm:gap-2">
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
        searchParamsToReset={searchParamsToReset}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
        ]}
      />
    </div>
  );
}

export default ProductTableOperations;
