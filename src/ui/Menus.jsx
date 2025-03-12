import { createContext, useContext, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import Button from './Button';

const MenusContext = createContext();

function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{
        openId,
        position,
        setPosition,
        close,
        open,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    const rect = e.target.closest('button').getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === '' || openId !== id ? open(id) : close();
  }
  return (
    <button onClick={handleClick}>
      <HiEllipsisVertical size={25} className="cursor-pointer" />
    </button>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const { ref } = useOutsideClick(close);
  if (openId !== id) return null;
  console.log(position);
  return createPortal(
    <ul
      style={{ top: `${position.y}px`, right: `${position.x}px` }}
      className="fixed rounded border border-slate-400 bg-slate-100"
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
}
function ButtonMenu({ children, icon, onClick, variant }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <Button onClick={handleClick} variant={variant}>
        {icon}
        <span>{children}</span>
      </Button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.ButtonMenu = ButtonMenu;
export default Menus;
