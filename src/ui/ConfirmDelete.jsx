import { ImSpinner2 } from 'react-icons/im';
import Button from './Button';
import toast from 'react-hot-toast';

function ConfirmDelete({ onCloseModal, disabled, onConfirm, resource }) {
  return (
    <div>
      <h2 className="text-md font-semibold md:text-2xl dark:text-slate-100">
        Delete {resource}
      </h2>
      <p className="my-5 flex w-xs items-center justify-center rounded-md border-2 border-red-700 bg-red-200 p-2 pl-5 text-[12px] font-semibold text-slate-800 sm:my-10 sm:h-20 sm:w-auto sm:rounded-2xl sm:px-12 sm:text-sm dark:border-red-400 dark:bg-red-800 dark:text-red-50">
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div className="flex w-full justify-end gap-3 px-7">
        <Button variant="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
        {/* <Button variant="danger" onClick={onConfirm} disabled={disabled}> */}
        <Button
          variant="danger"
          onClick={
            resource !== 'product'
              ? onConfirm
              : () =>
                  toast.error(
                    'Products delete kranne nathuwa ona ekak.(demo version)',
                    {
                      icon: '😀',
                    },
                  )
          }
          disabled={disabled}
        >
          {disabled ? (
            <>
              <span>Deleting..</span>
              <ImSpinner2 size={20} className="animate-spin" />
            </>
          ) : (
            'Delete'
          )}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
