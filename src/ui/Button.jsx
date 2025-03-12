function Button({
  children,
  disabled,
  onClick,
  buttonType,
  variant,
  selected,
}) {
  const base =
    'flex cursor-pointer items-center gap-1 rounded-md  text-[10px]  transition-colors duration-300';

  const styles = {
    primary:
      base +
      ' bg-sky-500 text-sky-50 hover:brightness-105  font-semibold  p-1.5 text-[10px] sm:text-sm shadow-md',
    secondary:
      base +
      ' border text-slate-800  font-semibold  p-1.5 text-[10px] sm:text-sm',
    small:
      base +
      ' text-slate-800 hover:bg-sky-100 w-full p-0.5 sm:p-1.5 text-[10px] sm:text-sm',
    danger:
      base +
      ' text-red-50 bg-red-700 p-0.5 sm:p-1.5 border-2 border-red-300 font-semibold text-[10px] sm:text-sm',

    filter:
      base +
      `  hover:border-sky-400 hover:border p-1 font-medium text-[9px] sm:text-sm disabled:cursor-not-allowed ${selected === children ? 'border border-sky-400 bg-sky-400 text-sky-50' : ' text-slate-800'}`,
  };
  //border border-sky-600
  return (
    <button
      type={buttonType}
      className={styles[variant]}
      onClick={onClick}
      disabled={selected === children}
    >
      {children}
    </button>
  );
}

export default Button;
