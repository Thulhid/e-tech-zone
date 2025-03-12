function ErrorMessage({ children }) {
  return (
    <span className="self-center text-[12px] text-red-600 sm:col-3 sm:justify-self-center sm:text-sm">
      {children}
    </span>
  );
}

export default ErrorMessage;
