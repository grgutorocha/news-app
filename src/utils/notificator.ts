import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

const options: ToastOptions = {
  autoClose: 5000,
  position: 'bottom-right',
};

export const notificator = {
  error: (content: React.ReactNode) => {
    toast.error(content, options);
  },
  info: (content: React.ReactNode) => {
    toast.info(content, options);
  },
  success: (content: React.ReactNode) => {
    toast.success(content, options);
  },
  warning: (content: React.ReactNode) => {
    toast.warning(content, options);
  },
};
