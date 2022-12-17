import { extendTheme } from 'native-base';

export const colorPallet = {
  _primary: {
    50: '#8A978C',
    100: '#E6F6F4',
    200: '#00A991',
    300: '#007F6D',
    400: '#003B33',
    500: '#3F5857',
  },
  _secondary: {
    50: '#B2BBC6',
    100: '#546881',
    200: '#1D242D',
  },
  _neutral: {
    50: '#fff',
    100: '#EBEBEB',
    200: '#3a3a3a',
    300: '#373737',
    400: '#292929',
    500: '#131313',
    600: '#000',
  },
};

const theme = extendTheme({
  colors: colorPallet,
  fontConfig: {
    Poppins: {
      400: {
        normal: 'Poppins_400Regular',
      },
      500: {
        normal: 'Poppins_500Medium',
      },
      700: {
        normal: 'Poppins_700Bold',
      },
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
      mono: 'Poppins',
    },
  },
});

export type ThemeType = typeof theme;
declare module 'native-base' {
  type ICustomTheme = ThemeType;
}

export default theme;
