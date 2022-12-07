import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import { createContext, FC, useState, useCallback, useContext } from 'react';

interface IMainLayoutContext {
  showMenu: boolean;
  showSearchForm: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  onOpenSearchForm: () => void;
  onCloseSearchForm: () => void;
}

const Context = createContext<IMainLayoutContext>({} as IMainLayoutContext);

const MainLayoutProvider: FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);

  const onCloseMenu = useCallback(() => {
    setShowMenu(false);
    enableBodyScroll(document.body);
  }, []);

  const onOpenMenu = useCallback(() => {
    setShowMenu(true);
    disableBodyScroll(document.body);
  }, []);

  const onCloseSearchForm = useCallback(() => {
    setShowSearchForm(false);
    enableBodyScroll(document.body);
  }, []);

  const onOpenSearchForm = useCallback(() => {
    setShowSearchForm(true);
    disableBodyScroll(document.body);
  }, []);

  return (
    <Context.Provider
      value={{ showMenu, showSearchForm, onOpenMenu, onCloseMenu, onOpenSearchForm, onCloseSearchForm }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMainLayoutContext = (): IMainLayoutContext => {
  const headerContext = useContext(Context);

  return headerContext;
};

export default MainLayoutProvider;
