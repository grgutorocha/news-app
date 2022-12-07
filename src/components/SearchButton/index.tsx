import Image from 'next/image';

import { Button } from './styles';

export interface ISearchButtonProps {
  onOpenSearch?: () => void;
}

const SearchButton = ({ onOpenSearch }: ISearchButtonProps) => {
  const handleOpen = () => {
    onOpenSearch?.();
  };

  return (
    <Button onClick={handleOpen}>
      <Image src="/icons/search.svg" width="20" height="20" alt="Ícone de Busca" />
    </Button>
  );
};

export default SearchButton;
