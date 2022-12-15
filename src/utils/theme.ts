import { extendTheme } from 'native-base';

export const colorPallet = {
  primary: {
    50: '#8A978C',
    100: '#E6F6F4',
    200: '#00A991',
    300: '#007F6D',
    400: '#003B33',
  },
  secondary: {
    50: '#B2BBC6',
    100: '#546881',
    200: '#1D242D',
  },
  neutral: {
    50: '#fff',
    100: '#EBEBEB',
    200: '#373737',
    300: '#292929',
    400: '#131313',
    500: '#000',
  },
};

const theme = extendTheme({
  colors: {
    brand: colorPallet,
  },
});

export type ThemeType = typeof theme;
declare module 'native-base' {
  type ICustomTheme = ThemeType;
}

export default theme;
