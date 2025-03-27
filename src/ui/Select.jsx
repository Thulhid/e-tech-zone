function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="m-2 ml-auto flex rounded bg-white text-sm text-slate-800 shadow-sm focus:ring focus:ring-sky-400 focus:ring-offset-2 focus:outline-none sm:m-0 sm:h-9 dark:bg-sky-700 dark:text-sky-50"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
