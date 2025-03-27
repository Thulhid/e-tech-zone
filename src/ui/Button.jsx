function Button({
  children,
  disabled,
  onClick,
  buttonType,
  variant,
  selected,
}) {
  const base =
    'flex cursor-pointer items-center gap-1 rounded-md  text-sm  transition-colors duration-300 disabled:cursor-not-allowed disabled:border-none';

  const styles = {
    primary:
      base +
      ' bg-sky-500  text-sky-50 hover:brightness-105  font-semibold  p-1.5 shadow-md dark:bg-sky-600',
    secondary:
      base +
      ' border text-slate-800 font-semibold p-1.5 active:bg-slate-200 dark:text-sky-50',
    small:
      base +
      ' text-slate-800 hover:bg-sky-100 w-full p-0.5 sm:p-1.5 text-sm dark:hover:bg-sky-900 dark:text-sky-50',
    danger:
      base +
      ' text-red-50 bg-red-700 p-2 font-semibold text-sm hover:brightness-105',

    filter:
      base +
      `  hover:border-sky-400 hover:border p-1 font-medium dark:text-sky-50 ${selected === children ? 'border border-sky-400 dark:bg-sky-900 bg-sky-400 text-sky-50 ' : ' text-slate-800 dark:text-sky-100'}`,

    pagination:
      base +
      ' p-1 hover:border-sky-400 bg-white shadow text-slate-800  sm:text-xs md:text-sm hover:border-sky-400 hover:border disabled:text-slate-500 disabled:opacity-75 disabled:cursor-not-allowed active:bg-sky-400 dark:text-sky-50 dark:bg-sky-600 dark:disabled:text-sky-200 dark:disabled:bg-sky-800 dark:active:bg-sky-800',

    shipped:
      base +
      ' bg-blue-500 rounded-lg! text-base! text-blue-50 p-2 shadow-sm shadow-blue-500/80 hover:shadow-blue-500/80 active:shadow-none hover:shadow-sm hover:scale-101 active:scale-100 transition-all duration-300 font-semibold disabled:bg-slate-400/60 disabled:shadow-none',
    delivered:
      base +
      ' bg-green-500 rounded-lg! text-base! text-green-50 p-2 shadow-sm shadow-green-500/80 hover:shadow-green-500/80 active:shadow-none hover:shadow-sm hover:scale-105 active:scale-100 transition-all duration-300 font-semibold disabled:bg-slate-400 disabled:shadow-none',

    login:
      base +
      ' bg-sky-500 text-sky-50 hover:brightness-105  font-medium text-xl p-1.5 sm:p-2 shadow-md flex items-center justify-center',

    header:
      base +
      ' text-slate-800 hover:bg-sky-100 w-full p-0.5 sm:p-1 text-sm dark:hover:bg-sky-900 dark:text-sky-50',
  };

  //border border-sky-600
  return (
    <button
      type={buttonType}
      className={styles[variant]}
      onClick={onClick}
      disabled={disabled || selected === children}
    >
      {children}
    </button>
  );
}

export default Button;
