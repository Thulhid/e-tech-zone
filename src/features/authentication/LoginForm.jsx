import Button from '../../ui/Button';
import { useState } from 'react';
import { useLogin } from './useLogin';
import { ImSpinner2 } from 'react-icons/im';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }
  return (
    <div>
      <h1 className="mb-10 text-center text-2xl font-medium text-slate-700 md:text-4xl">
        Login in your account
      </h1>

      <form
        onSubmit={handleSubmit}
        className="m-auto flex w-fit flex-col gap-4 rounded-lg bg-white p-10 shadow sm:gap-5"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="login-email" className="font-medium text-slate-700">
            Email address
          </label>
          <input
            className="input h-9 sm:w-sm dark:border-slate-600 dark:text-slate-800"
            type="text"
            id="login-email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="login-password"
            className="font-medium text-slate-700"
          >
            Password
          </label>
          <input
            className="input h-9 sm:w-sm dark:border-slate-600 dark:text-slate-800"
            type="password"
            id="login-password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
        </div>
        <Button variant="login" disabled={isPending}>
          {isPending ? (
            <>
              <span>Processing..</span>
              <ImSpinner2 size={20} className="animate-spin" />
            </>
          ) : (
            'Log in'
          )}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
