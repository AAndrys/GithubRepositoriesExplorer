export enum ColorNames {
  white = 'white',
  black = 'black',
}

export interface Theme {
  colors: Record<ColorNames, string>;
}

export const colors: Theme['colors'] = {
  white: '#FFFFFF',
  black: '#000000',
};

export const theme: Theme = {
  colors,
} as const;
