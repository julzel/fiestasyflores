export type INavLink = {
  path: string;
  label: string;
};

export type IMenuItem = {
  label: string;
  onClick?: () => void;
};

export type IFontSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';
