import Home from '../views/Home';
import Transfer from '../views/Home/Transfer';

export enum RoutesEnum {
  Home = 'home',
  Transfer = 'transfer',
}

export const Views: Record<RoutesEnum, () => JSX.Element> = {
  home: Home,
  transfer: Transfer,
};

export type RootStackParamList = {
  home: undefined;
  transfer: undefined;
};
