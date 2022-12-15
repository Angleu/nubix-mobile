import Home from '../views/Home';
import Transfer from '../views/Home/Transfer';

export enum RoutesEnum {
  Home = 'home',
  Transfer = 'transfer',
}

export const Views = {
  home: Home,
  transfer: Transfer,
};
