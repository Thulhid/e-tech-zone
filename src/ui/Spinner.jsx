import { ImSpinner2 } from 'react-icons/im';

function Spinner({ styles = 'flex h-40 items-end justify-center' }) {
  return (
    <div className={styles}>
      <ImSpinner2 size={60} className="animate-spin text-sky-300" />
    </div>
  );
}

export default Spinner;
