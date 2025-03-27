import { Children, cloneElement, isValidElement } from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `group flex items-center gap-2 rounded py-3 transition-colors duration-300 xl:h-10 xl:w-50 xl:px-2 xl:font-medium ${
            isActive
              ? 'bg-sky-200 text-sky-600 xl:px-4 xl:py-2 dark:bg-sky-700 dark:text-slate-50'
              : 'text-slate-600 transition-colors hover:bg-slate-200 hover:text-sky-500 dark:text-slate-400 dark:hover:bg-sky-900 dark:hover:text-slate-300'
          }`
        }
      >
        {({ isActive }) =>
          Children.map(children, (child) => {
            if (!isValidElement(child)) return child;

            const isIcon = Boolean(child.props.size);

            return cloneElement(child, {
              className: `${child.props.className || ''} ${
                !isIcon
                  ? isActive
                    ? 'text-slate-800 dark:text-slate-100'
                    : 'text-slate-600 group-hover:text-slate-700 dark:group-hover:text-slate-100 dark:text-slate-300'
                  : ''
              }`,
            });
          })
        }
      </NavLink>
    </li>
  );
}

export default NavItem;
