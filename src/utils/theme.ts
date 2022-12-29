import { extendTheme } from 'native-base';

export const colorPallet = {
  primary: {
    50: '#8A978C',
    100: '#3F5857',
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
      body: 'Poppins',
      heading: 'Poppins',
      mono: 'Poppins',
    },
  },
});

export type ThemeType = typeof theme;
declare module 'native-base' {
  type ICustomTheme = ThemeType;
}

export default theme;
