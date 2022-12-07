import { NextPage } from 'next';
import { LayoutEnum } from 'src/layouts';

export type Page<P = {}> = NextPage<P> & {
  layout?: LayoutEnum;
};
