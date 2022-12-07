import Image from 'next/image';
import { Button, Tooltip } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useState } from 'react';

import Modal from 'src/components/Modal';

import 'antd/lib/tooltip/style/index.css';
import 'antd/lib/button/style/index.css';

import { Container, Example, Info } from './styles';

interface IItemProps {
  title: string;
  dimensions: string;
  size: string;
  exampleImg: string;
}

const Item = ({ title, dimensions, size, exampleImg }: IItemProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const getDescription = (title: string, dimensions: string, size: string): string => {
    return `Exemplo: ${title} (${dimensions}, ${size})`;
  };

  return (
    <>
      <Container>
        <Info>
          <strong>{title}</strong>
          <p>Formato: {dimensions}</p>
          <p>Peso Máximo: {size}</p>
        </Info>
        <Example>
          <strong>Exemplo</strong>
          <Tooltip title="Ver modelo">
            <Button shape="circle" icon={<EyeOutlined />} onClick={showModal} />
          </Tooltip>
        </Example>
      </Container>
      <Modal
        title={getDescription(title, dimensions, size)}
        visible={isModalVisible}
        onCancel={hideModal}
        footer={null}
      >
        <Image src={exampleImg} width="800" height="1597" alt={getDescription(title, dimensions, size)} />
      </Modal>
    </>
  );
};

export default Item;
