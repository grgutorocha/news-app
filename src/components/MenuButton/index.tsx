import Image from 'next/image';

import { Button } from './styles';

export interface IMenuButton {
  onOpenMenu?: () => void;
}

const MenuButton = ({ onOpenMenu }: IMenuButton) => {
  const handleOpen = () => {
    onOpenMenu?.();
  };

  return (
    <Button onClick={handleOpen}>
      <Image src="/icons/menu.svg" width="20" height="20" alt="Ícone de Menu" />
      <span>MENU</span>
    </Button>
  );
};

export default MenuButton;
