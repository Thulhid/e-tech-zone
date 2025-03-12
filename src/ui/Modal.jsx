import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import Button from './Button';
import { useOutsideClick } from '../hooks/useOutsideClick';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <div className="fixed top-0 left-0 z-1003 h-dvh w-full overflow-auto bg-slate-50/10 backdrop-blur-xs">
      <div
        ref={ref}
        className="fixed top-[10%] left-[8%] w-min transform-cpu rounded border border-slate-400 bg-sky-100 px-2 py-5 shadow-2xl shadow-slate-400 transition-all duration-300 sm:top-[5%] sm:left-[5%] sm:w-auto md:top-[10%] md:left-[10%] md:pr-5 md:pl-5 xl:top-[10%] xl:left-[25%]"
      >
        <button onClick={close} className="cursor-pointer">
          <HiXMark />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
