import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import { useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function SalesChart({ orders, numDays }) {
  const [colors, setColors] = useState({});

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, 'MM dd'),
      totalSales: orders
        ?.filter((order) => isSameDay(date, new Date(order.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      shippingCost: orders
        ?.filter((order) => isSameDay(date, new Date(order.created_at)))
        .reduce((acc, cur) => acc + cur.shippingPrice, 0),
    };
  });

  useEffect(() => {
    const updateColors = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');

      setColors({
        sales: {
          stroke: isDarkMode
            ? 'oklch(0.685 0.169 237.323)'
            : 'oklch(0.685 0.169 237.323)',
          fill: isDarkMode
            ? 'oklch(0.5 0.134 242.749)'
            : 'oklch(0.901 0.058 230.902)',
          tick: isDarkMode
            ? 'oklch(0.901 0.058 230.902)'
            : 'oklch(0.372 0.044 257.287)',
          tip: isDarkMode
            ? 'oklch(0.901 0.058 230.902)'
            : 'oklch(0.977 0.013 236.62)',
          grid: isDarkMode
            ? 'oklch(0.5 0.134 242.749)'
            : 'oklch(0.869 0.022 252.894)',
        },
        shipping: {
          stroke: isDarkMode
            ? 'oklch(0.723 0.219 149.579)'
            : 'oklch(0.723 0.219 149.579)',
          fill: isDarkMode
            ? 'oklch(0.792 0.209 151.711)'
            : 'oklch(0.871 0.15 154.449)',
        },
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
  return (
    <div className="col-span-full">
      <h2 className="m-3 font-medium text-slate-500 sm:text-xl dark:text-slate-100">
        Sales from {format(allDates.at(0), 'dd MMM yyyy')} &mdash;{' '}
        {format(allDates.at(-1), 'dd MMM yyyy')}{' '}
      </h2>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.sales?.tick }}
            tickLine={{ stroke: colors.sales?.tick }}
          />
          <YAxis
            domain={[0, 'auto']}
            unit="LKR"
            tick={{ fill: colors.sales?.tick }}
            tickLine={{ stroke: colors.sales?.tick }}
            width={80}
          />
          <CartesianGrid stroke={colors.sales?.grid} strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.sales?.tip }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.sales?.stroke}
            fill={colors.sales?.fill}
            strokeWidth={2}
            name="Total sales"
            unit="LKR"
          />
          <Area
            dataKey="shippingCost"
            type="monotone"
            stroke={colors.shipping?.stroke}
            fill={colors.shipping?.fill}
            strokeWidth={2}
            name="Shipping cost"
            unit="LKR"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
