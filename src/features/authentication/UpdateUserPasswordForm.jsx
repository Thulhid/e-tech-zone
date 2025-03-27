import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import { useUpdateUser } from './useUpdateUser';
import { ImSpinner2 } from 'react-icons/im';

function UpdateUserPasswordForm() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
    reset,
  } = useForm();
  const { updateUser, isUpdating } = useUpdateUser();
  function onSubmit({ newPassword }) {
    updateUser({ password: newPassword }, { onSuccess: reset });
  }
  return (
    <div className="m-auto w-fit">
      <h2 className="mb-5 ml-4 text-xl font-semibold text-slate-500 sm:ml-0 dark:text-slate-300">
        Update password
      </h2>
      <form
        className="rounded-lg bg-white p-2 shadow-lg md:p-5 dark:bg-sky-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow
          label="New password (min 8 chars)"
          type="updateUser"
          error={errors?.newPassword?.message}
        >
          <input
            className="input h-9 sm:w-sm"
            id="newPassword"
            type="password"
            disabled={isUpdating}
            {...register('newPassword', {
              required: 'This felid is required!',
              minLength: {
                value: 8,
                message: 'Must minimum of 8 characters',
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Confirm password"
          type="updateUser"
          error={errors?.repeatNewPassword?.message}
        >
          <input
            className="input h-9 sm:w-sm"
            id="repeatNewPassword"
            disabled={isUpdating}
            type="password"
            {...register('repeatNewPassword', {
              required: 'This felid is required!',
              validate: (value) =>
                value === getValues('newPassword') || 'Password must match',
            })}
          />
        </FormRow>

        <div className="grid grid-cols-[7rem_1fr] py-10 sm:grid-cols-2">
          <span className="col-2 flex gap-3 justify-self-end whitespace-nowrap sm:gap-3">
            <Button
              variant="secondary"
              buttonType="reset"
              disabled={isUpdating}
              onClick={reset}
            >
              Clear
            </Button>
            <Button variant="primary" disabled={isUpdating} onClick={reset}>
              {isUpdating ? (
                <>
                  <span>Updating..</span>
                  <ImSpinner2 size={20} className="animate-spin" />
                </>
              ) : (
                'Update password'
              )}
            </Button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserPasswordForm;
