import React from 'react';

export const ThemeContext = React.createContext(null);

const colors = {
  white: '#fff',
  bg: '#fafafa',
  primary: '#5e72e4',
  placeholder: '#9b9b9b',
  shadow: 'rgba(0, 0, 0, 0.1)',
  subheading: '#6d6d6d',
  error: 'rgba(242, 49, 76, 1)',
  noBg: 'transparent',
  cardBg: '#fff',
  default: '#333333',
};

const colorsDark = {
  ...colors,
  bg: '#303030',
  default: '#d3d3d3',
  tabBar: '#333333',
  shadow: 'rgba(0, 0, 0, 0.1)',
  loadingBg: 'rgba(0, 0, 0, 0.85)',
  cardBg: '#424242',
};

const spacing = {
  small: 10,
  normal: 14,
  big: 20,
  default: 10,
  huge: 30,
  xHuge: 60,
  noMargin: 0,
};

const flexAlign = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
  default: 'flex-start',
};

const textAlign = {
  center: 'center',
  left: 'left',
  right: 'right',
  default: 'left',
};

const size = {
  stiny: 10,
  tiny: 12,
  small: 14,
  default: 16,
  medium: 18,
  large: 24,
  xlarge: 32,
  xxlarge: 46,
  xxxlarge: 52,
};

const height = {
  input: 50,
  tabBar: 60,
  header: 60,
};

const button = {
  tiny: 26,
  default: 40,
  medium: 60,
  big: 80,
};

const font = {
  default: 'open-sans-regular',
  bold: 'open-sans-bold',
};

const avatar = {
  small: 50,
  default: 50,
  big: 60,
  huge: 140,
  light: 40,
};

const layout = {
  radius: 10,
  smallRadius: 7,
  badgeRadius: 4,
  width: 260,
};

export default (theme = 'light') => ({
  colors: theme === 'light' ? colors : colorsDark,
  spacing,
  layout,
  size,
  font,
  avatar,
  height,
  flexAlign,
  textAlign,
  button,
});
