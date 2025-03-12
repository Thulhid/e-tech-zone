function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="m-2 ml-auto flex rounded bg-white text-[10px] text-slate-800 shadow-sm focus:ring focus:ring-sky-400 focus:ring-offset-2 focus:outline-none sm:m-0 sm:h-9 sm:text-sm"
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
