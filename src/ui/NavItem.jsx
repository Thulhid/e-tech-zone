import { Children, cloneElement, isValidElement } from 'react';
import { NavLink } from 'react-router-dom';

// function NavItem({ to, children }) {
//   return (
//     <li>
//       <NavLink
//         to={to}
//         className={({ isActive }) =>
//           `group flex items-center gap-2 rounded py-3 transition-colors duration-300 xl:h-10 xl:w-50 xl:px-2 xl:font-medium ${isActive ? 'bg-sky-200 xl:px-4 xl:py-2' : 'hover:bg-slate-200'}`
//         }
//       >
//         {({ isActive }) =>
//           Children.map(children, (child) =>
//             isValidElement(child)
//               ? cloneElement(child, {
//                   className: `${child.props.className || ''} ${
//                     isActive
//                       ? 'text-blue-700'
//                       : 'text-slate-500 group-hover:text-blue-700'
//                   }`.trim(),
//                 })
//               : child,
//           )
//         }
//       </NavLink>
//     </li>
//   );
// }

// export default NavItem;

//  const base =
//   'group flex xl:h-10 xl:w-50 xl:items-center xl:gap-2 xl:px-2 text-center xl:font-medium text-slate-600 transition-colors duration-300 hover:bg-slate-200 rounded py-3 hover:text-slate-700';

// function NavItem({ to, children }) {
//   return (
//     <li>
//       <NavLink
//         to={to}
//         className={({ isActive }) =>
//           `group flex items-center gap-2 rounded py-3 transition-colors duration-300 xl:h-10 xl:w-50 xl:px-2 xl:font-medium ${isActive ? 'bg-sky-200 xl:px-4 xl:py-2' : 'hover:bg-slate-200'}`
//         }
//       >
//         {({ isActive }) =>
//           Children.map(children, (child) => {
//             if (!isValidElement(child)) return child;

//             const isIcon =
//               child.type?.displayName?.includes('Icon') || child.props.size;

//             return cloneElement(child, {
//               className: `${child.props.className || ''} ${
//                 isIcon
//                   ? isActive
//                     ? 'text-blue-600'
//                     : 'text-slate-600 group-hover:text-slate-700'
//                   : isActive
//                     ? 'text-slate-800'
//                     : 'text-slate-600 group-hover:text-slate-700'
//               }`.trim(),
//             });
//           })
//         }
//       </NavLink>
//     </li>
//   );
// }

// export default NavItem;
// import { NavLink } from "react-router-dom";
// import { Children, cloneElement, isValidElement } from "react";

function NavItem({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `group flex items-center gap-2 rounded py-3 transition-colors duration-300 xl:h-10 xl:w-50 xl:px-2 xl:font-medium ${
            isActive ? 'bg-sky-200 xl:px-4 xl:py-2' : 'hover:bg-slate-200'
          }`
        }
      >
        {({ isActive }) =>
          Children.map(children, (child) => {
            if (!isValidElement(child)) return child;

            const isIcon = Boolean(child.props.size);

            return cloneElement(child, {
              className: `${child.props.className || ''} ${
                isIcon
                  ? isActive
                    ? 'text-sky-600'
                    : 'text-slate-600 group-hover:text-sky-500 transition-colors'
                  : isActive
                    ? 'text-slate-800'
                    : 'text-slate-600 group-hover:text-slate-700'
              }`.trim(),
            });
          })
        }
      </NavLink>
    </li>
  );
}

export default NavItem;
