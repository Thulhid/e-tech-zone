import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';

import { CgSpinner } from 'react-icons/cg';
import { FaSpinner } from 'react-icons/fa';
import {
  ImSpinner,
  ImSpinner10,
  ImSpinner2,
  ImSpinner8,
  ImSpinner9,
} from 'react-icons/im';
import { VscLoading } from 'react-icons/vsc';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// function Loader() {
//   return (
//     <ImSpinner2 size={40} color="blue" className="animate-spin text-blue-500" />
//   );
// }
