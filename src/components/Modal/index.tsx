import React from 'react';
import { Modal as ModalUI, ModalProps } from 'antd';

import 'antd/lib/style/index.css';
import 'antd/lib/modal/style/index.css';
import 'antd/lib/button/style/index.css';

const Modal: React.FC<ModalProps> = (props) => {
  return <ModalUI {...props} />;
};

export default Modal;
