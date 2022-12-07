import React from 'react';

import Main from './Main';

export enum LayoutEnum {
  main,
  empty,
}

interface ILayout {
  type?: LayoutEnum;
}

const Layout: React.FC<ILayout> = ({ type = LayoutEnum.main, children }) => {
  if (type === LayoutEnum.empty) {
    return <>{children}</>;
  }

  return <Main>{children}</Main>;
};

export default Layout;
