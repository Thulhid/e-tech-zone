import Button from './Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="m-auto flex h-dvh flex-col items-center justify-center gap-4 bg-slate-50 dark:bg-sky-600">
      <h1 className="text-lg font-bold text-slate-600 sm:text-3xl xl:text-4xl dark:text-slate-200">
        Hmmm.. Something went wrong 🤔
      </h1>
      <p className="text-xs text-slate-500 sm:text-base xl:text-lg dark:text-slate-300">
        Error: {error.message}
      </p>
      <Button variant="secondary" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
}

export default ErrorFallback;
