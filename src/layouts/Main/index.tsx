import React, { createContext, useCallback, useState, FC, useContext } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { Menu } from 'src/components/Menu';
import SearchForm from 'src/components/SearchForm';

import MainLayoutProvider, { useMainLayoutContext } from './Context';

const Siders = () => {
  const { showMenu, showSearchForm, onCloseMenu, onCloseSearchForm } = useMainLayoutContext();

  return (
    <>
      {showMenu && <Menu onClose={onCloseMenu} />}
      {showSearchForm && <SearchForm onClose={onCloseSearchForm} />}
    </>
  );
};

const Main: React.FC = ({ children }) => (
  <MainLayoutProvider>
    <Header />
    {children}
    <Footer />
    <Siders />
  </MainLayoutProvider>
);

export default Main;
