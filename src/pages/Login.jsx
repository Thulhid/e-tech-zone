import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

function Login() {
  return (
    <div className="h-dvh bg-slate-50 p-5">
      <Logo
        containerStyle="mb-12 flex w-auto flex-col justify-center gap-2 text-center"
        textStyle="dark:text-slate-600 text-slate-600"
      />
      <LoginForm />
    </div>
  );
}

export default Login;
