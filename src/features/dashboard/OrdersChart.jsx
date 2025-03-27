import { useEffect, useState } from 'react';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

function OrdersChart({ orders }) {
  const [colors, setColors] = useState({});

  useEffect(() => {
    const updateColors = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');

      setColors({
        tip: isDarkMode
          ? 'oklch(0.901 0.058 230.902)'
          : 'oklch(0.977 0.013 236.62)',

        pending: isDarkMode
          ? 'oklch(0.808 0.114 19.571)'
          : 'oklch(0.704 0.191 22.216)',
        shipped: isDarkMode
          ? 'oklch(0.809 0.105 251.813)'
          : 'oklch(0.707 0.165 254.624)',
        delivered: isDarkMode
          ? 'oklch(0.871 0.15 154.449)'
          : 'oklch(0.792 0.209 151.711)',
      });
    };

    updateColors(); // Run on mount

    // Listen for dark mode changes
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const data = [
    {
      status: 'pending',
      value: orders?.reduce(
        (acc, order) => (order.status === 'pending' ? acc + 1 : acc),
        0,
      ),
    },
    {
      status: 'shipped',
      value: orders?.reduce(
        (acc, order) => (order.status === 'shipped' ? acc + 1 : acc),
        0,
      ),
    },
    {
      status: 'delivered',
      value: orders?.reduce(
        (acc, order) => (order.status === 'delivered' ? acc + 1 : acc),
        0,
      ),
    },
  ];

  return (
    <div className="col-span-2 rounded-xl bg-white px-5 py-3 dark:bg-sky-700">
      <h2 className="text-xl font-medium text-slate-500 dark:text-slate-100">
        Orders summary
      </h2>
      <ResponsiveContainer height={300}>
        <PieChart>
          <Pie
            data={data}
            nameKey="status"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="50%"
            cy="50%"
            paddingAngle={6}
          >
            <Cell fill={colors.pending} stroke={colors.pending} />
            <Cell fill={colors.shipped} stroke={colors.shipped} />
            <Cell fill={colors.delivered} stroke={colors.delivered} />
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: colors.tip }} />
          <Legend iconSize={12} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrdersChart;
