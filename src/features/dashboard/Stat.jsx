function Stat({ icon, title, value, color, valueSize }) {
  return (
    <div
      className={`${color} grid grid-rows-2 items-center justify-center px-5 py-3 dark:bg-sky-700`}
    >
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <h2 className="text-sm font-semibold text-slate-500 uppercase md:text-base dark:text-slate-200">
          {title}
        </h2>
      </div>
      <p
        className={`justify-self-center font-medium text-slate-600 dark:text-slate-100 ${valueSize}`}
      >
        {value ?? ''}
      </p>
    </div>
  );
}

export default Stat;
