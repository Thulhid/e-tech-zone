import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/constants';
import Button from '../ui/Button';

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  return (
    <div className="mr-2 mb-2 flex items-center">
      <p className="ml-1 w-fit text-xs text-slate-800 md:text-sm dark:text-sky-100">
        <em>
          Showing{' '}
          <span className="font-medium">
            {(currentPage - 1) * PAGE_SIZE + 1}
          </span>{' '}
          to{' '}
          <span className="font-medium">
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>{' '}
          of <span className="font-medium">{count}</span> results
        </em>
      </p>
      <div className="ml-auto flex w-fit gap-2">
        <Button
          variant="pagination"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft /> <span>Previous</span>
        </Button>
        <Button
          variant="pagination"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
