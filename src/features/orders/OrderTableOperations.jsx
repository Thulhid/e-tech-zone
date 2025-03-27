import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function OrderTableOperations() {
  const searchParamsToReset = [{ name: 'page', value: 1 }];
  return (
    <div className="mb-2 ml-auto w-fit items-center gap-1 sm:mb-3 sm:flex sm:gap-2">
      <Filter
        filterField="status"
        options={[
          { value: 'all', label: 'All' },
          { value: 'pending', label: 'Pending' },
          { value: 'shipped', label: 'Shipped' },
          { value: 'delivered', label: 'Delivered' },
        ]}
        searchParamsToReset={searchParamsToReset}
      />
      <SortBy
        options={[
          {
            value: 'created_at-desc',
            label: 'Sort by created (recent product)',
          },
          {
            value: 'created_at-asc',
            label: 'Sort by created (earlier first)',
          },
          { value: 'totalPrice-asc', label: 'Sort by price (low first)' },
          { value: 'totalPrice-desc', label: 'Sort by price (high first)' },
        ]}
      />
    </div>
  );
}

export default OrderTableOperations;
