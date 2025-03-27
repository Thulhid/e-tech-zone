function ErrorMessage({ children }) {
  return (
    <span className="col-2 w-fit self-center text-[12px] text-red-600 sm:justify-self-center sm:text-sm xl:col-3 dark:rounded dark:bg-red-900 dark:px-1 dark:text-red-100">
      {children}
    </span>
  );
}

export default ErrorMessage;
