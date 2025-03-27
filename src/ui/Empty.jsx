function Empty({ resourceName }) {
  return (
    <div className="mt-5 bg-white p-6 text-center text-xs text-slate-700 shadow sm:text-sm dark:bg-sky-700 dark:text-slate-200">
      No {resourceName} could be found.{' '}
    </div>
  );
}

export default Empty;
