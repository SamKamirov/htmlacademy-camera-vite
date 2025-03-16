import { Bounce, ToastContainer } from 'react-toastify';
const TOAST_TIME = 2000;

export const Toast = () => (
  <ToastContainer
    position="top-center"
    autoClose={TOAST_TIME}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}
    theme="light"
    transition={Bounce}
  />
);
