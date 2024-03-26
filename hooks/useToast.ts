import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { ToastContentProps, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {
  const showToast = (type: string | number, message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | ((props: ToastContentProps<unknown>) => ReactNode), options = {}) => {
    if(type) {
      toast[type](message, options);
    }else{
      toast(message, options);
    }
  };

  return {
    showToast
  };
};

export default useToast;
