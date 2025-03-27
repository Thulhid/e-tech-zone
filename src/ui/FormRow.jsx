import ErrorMessage from './ErrorMessage';

function FormRow({ label, error, children, type }) {
  const styles = {
    normal:
      'grid grid-cols-[7rem_1fr] items-center py-4 xl:grid-cols-[17rem_1fr_1fr]',
    addProduct:
      'grid grid-cols-[7rem_1fr] items-center py-3 sm:grid-cols-[10rem_1fr_1fr]',
    updateUser:
      'grid grid-cols-[1fr_1fr] items-center py-3 sm:grid-cols-[17rem_1fr_1fr]',
  };
  // updateUser: 'flex items-center py-3 gap-4 flex-start my-3',

  return (
    <div className={styles[type]}>
      {label && (
        <label
          className="text-sm font-medium text-slate-800 sm:text-base dark:text-slate-200"
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}

      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

export default FormRow;
