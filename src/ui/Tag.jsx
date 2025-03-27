function Tag({ status }) {
  const base = `text-[10px] sm:text-xs font-medium md:font-semibold w-fit py-1 px-1.5 rounded-full uppercase shadow`;

  const statusTag = {
    pending:
      base + ' bg-red-200 text-red-700 dark:bg-red-700 dark:text-red-100',
    shipped:
      base + ' bg-blue-200 text-blue-700 dark:bg-blue-700 dark:text-blue-100',
    delivered:
      base +
      ' bg-green-200 text-green-700 dark:bg-green-700 dark:text-green-100',
  };

  return <div className={statusTag[status?.toLowerCase()]}>{status}</div>;
}

export default Tag;
