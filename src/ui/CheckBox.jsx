function CheckBox({ children, onChange, confirmPaid, disabled }) {
  return (
    <div className="my-10 flex items-start gap-3 rounded-lg bg-white px-5 py-5 text-sm font-medium shadow md:text-xl md:font-normal dark:bg-sky-700">
      <input
        id="isPaid"
        type="checkbox"
        checked={confirmPaid}
        onChange={onChange}
        disabled={disabled}
        className={`h-6 w-6 cursor-pointer accent-sky-400 focus:ring focus:ring-sky-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed`}
      />
      <label htmlFor="isPaid" className="text-slate-700 dark:text-slate-50">
        {children}
      </label>
    </div>
  );
}

export default CheckBox;
