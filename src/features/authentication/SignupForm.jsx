import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { useSignup } from './useSignup';
import { ImSpinner2 } from 'react-icons/im';

function SignupForm() {
  const { signup, isPending } = useSignup();
  const { handleSubmit, register, reset, formState, getValues } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      {
        fullName,
        email,
        password,
      },
      {
        onSettled: reset,
      },
    );
  }
  function onError() {}
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="m-auto w-fit">
      <FormRow
        label="Full name"
        error={errors?.fullName?.message}
        type="normal"
      >
        <input
          className="input col-2 h-9 sm:w-sm"
          id="fullName"
          disabled={isPending}
          type="text"
          {...register('fullName', {
            required: 'This field required!',
          })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message} type="normal">
        <input
          className="input h-9 sm:w-sm"
          id="email"
          disabled={isPending}
          type="email"
          {...register('email', {
            required: 'This field required!',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Provide a valid email address',
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Password (8 min characters)"
        error={errors?.password?.message}
        type="normal"
      >
        <input
          className="input h-9 sm:w-sm"
          id="password"
          type="password"
          disabled={isPending}
          {...register('password', {
            required: 'This field is required!',
            minLength: {
              value: 8,
              message: 'Must minimum of 8 characters',
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Repeat password"
        error={errors?.resetPassword?.message}
        type="normal"
      >
        <input
          className="input h-9 sm:w-sm"
          id="resetPassword"
          type="password"
          disabled={isPending}
          {...register('resetPassword', {
            required: 'This field is required!',
            validate: (value) =>
              value === getValues('password') || 'Password must match',
          })}
        />
      </FormRow>

      <div className="grid grid-cols-[7rem_1fr] py-10 sm:grid-cols-[10rem_2fr_1fr]">
        <span className="col-2 flex gap-3 whitespace-nowrap sm:col-3 sm:gap-3">
          <Button
            disabled={isPending}
            variant="secondary"
            buttonType="reset"
            onClick={reset}
          >
            Clear
          </Button>
          <Button disabled={isPending} variant="primary" onClick={reset}>
            {isPending ? (
              <>
                <span>Creating..</span>
                <ImSpinner2 size={20} className="animate-spin" />
              </>
            ) : (
              'Create new user'
            )}
          </Button>
        </span>
      </div>
    </form>
  );
}

export default SignupForm;
