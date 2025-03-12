import ErrorMessage from './ErrorMessage';

function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] items-center py-3 sm:grid-cols-[10rem_1fr_1fr]">
      {label && (
        <label className="text-sm sm:text-base" htmlFor={children.props.id}>
          {label}
        </label>
      )}

      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

export default FormRow;
