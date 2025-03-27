import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
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
        className="xl:px-10px fixed top-1/2 left-1/2 w-85 -translate-x-1/2 -translate-y-1/2 transform rounded border border-slate-400 bg-sky-100 px-2 py-5 shadow-2xl shadow-slate-400 transition-all duration-300 sm:w-auto md:px-5 dark:bg-sky-700 dark:shadow-sky-950"
      >
        <button onClick={close} className="cursor-pointer dark:text-slate-300">
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
