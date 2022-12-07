import router from 'next/router';
import React, { useCallback, useState } from 'react';

import { constants } from 'src/utils/constants';

import { Wrapper, Container, Header, Title, ButtonClose, Search, Input, Button, ButtonCancel } from './styles';

interface IState {
  searchValue: string;
}
export interface ISearchFormProps {
  onClose?: () => void;
}

const initialState: IState = {
  searchValue: '',
};

const SearchForm = ({ onClose }: ISearchFormProps) => {
  const [searchValue, setSearchValue] = useState<string>(initialState.searchValue);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const normalize = (value: string): string => {
    return value.trim().split(' ').join('-');
  };

  const handleChangeSearch = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(target.value);
  };

  const onSearch = () => {
    if (searchValue) {
      setSearchValue(initialState.searchValue);
      handleClose();
      router.push(`${constants.ROUTE.BUSCA}/${normalize(searchValue)}`);
    }
  };

  const handleKeypress = ({ key }: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (['Enter', 'NumpadEnter'].includes(key)) {
      onSearch();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Buscar no Site</Title>
          <ButtonClose onClick={handleClose}>Fechar</ButtonClose>
        </Header>
        <Search onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite aqui sua busca"
            onChange={handleChangeSearch}
            value={searchValue}
            onKeyPress={handleKeypress}
          />
          <Button onClick={onSearch} disabled={Boolean(!searchValue)}>
            Buscar
          </Button>
          <ButtonCancel onClick={handleClose}>Cancelar</ButtonCancel>
        </Search>
      </Container>
    </Wrapper>
  );
};

export default SearchForm;
