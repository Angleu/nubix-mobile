import { Home, Transfer } from '../views';

export enum RoutesEnum {
  Home = 'home',
  Transfer = 'transfer',
}

export const views: Record<RoutesEnum, () => JSX.Element> = {
  home: Home,
  transfer: Transfer,
};

export type RootStackParamListType = {
  home: undefined;
  transfer: undefined;
};
