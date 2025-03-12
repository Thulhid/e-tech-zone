export const formatCurrency = (value) =>
  `${new Intl.NumberFormat('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)} LKR`;
