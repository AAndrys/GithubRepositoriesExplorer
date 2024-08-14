export enum ColorNames {
  white = 'white',
  black = 'black',
  silver = 'silver',
  dodgerBlue = 'dodgerBlue',
  silverChaice = 'silverChaice',
}

export enum ThemeColors {
  text = 'text',
  card = 'card',
  button = 'button',
  border = 'border',
  primary = 'primary',
  background = 'background',
}

export interface Theme {
  colors: Record<ColorNames, string>;
  themeColors: {
    light: Record<ThemeColors, string>;
    dark: Record<ThemeColors, string>;
  };
}

export const colors: Theme['colors'] = {
  white: '#FFFFFF',
  black: '#000000',
  silver: '#CCCCC',
  dodgerBlue: '#2686FF',
  silverChaice: '#A1A1A1',
};

export const themeColors: Theme['themeColors'] = {
  light: {
    text: colors.black,
    card: colors.silverChaice,
    button: colors.dodgerBlue,
    border: colors.silver,
    primary: colors.white,
    background: colors.white,
  },
  dark: {
    text: colors.white,
    card: colors.silverChaice,
    button: colors.dodgerBlue,
    border: colors.white,
    primary: colors.black,
    background: colors.black,
  },
};

export const theme: Theme = {
  colors,
  themeColors,
} as const;
