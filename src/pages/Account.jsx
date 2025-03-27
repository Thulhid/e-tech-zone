import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdateUserPasswordForm from '../features/authentication/UpdateUserPasswordForm';

function Account() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="m-4 ml-4 text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl dark:text-slate-200">
        Update your account
      </h1>
      <UpdateUserDataForm />
      <UpdateUserPasswordForm />
    </div>
  );
}

export default Account;
