import { useSearchParams } from 'react-router-dom';
import Button from './Button';
function Filter({ filterField, options, searchParamsToReset }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0);
  const currentLabel =
    options.find((option) => option.value === currentFilter)?.label ||
    options[0].label;
  //searchParams.set('page', 1);
  function handleClick(value) {
    searchParams.set(filterField, value);
    searchParamsToReset?.forEach((param) =>
      searchParams.set(param.name, param.value),
    );
    setSearchParams(searchParams);
  }

  return (
    <div className="m-2 ml-auto flex w-fit items-center gap-1.5 rounded-md bg-white p-1 px-2 shadow-sm sm:m-0 dark:bg-sky-600">
      {options.map((option) => (
        <Button
          variant="filter"
          key={option.value}
          onClick={() => handleClick(option.value)}
          selected={currentLabel}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
