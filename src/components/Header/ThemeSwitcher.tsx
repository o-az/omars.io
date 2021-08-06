import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as DarkSVG } from '../../assets/dark-toggle.svg';
import { ReactComponent as LightSVG } from '../../assets/light-toggle.svg';

export const SVGButton = styled.button`
  background: transparent;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: none;
  justify-self: end;
  grid-column-start: 2;
  @media (max-width: 1000px) {
    justify-self: start;
    grid-column-start: 3;
    padding: 5px 0 0 35px;
  } ;
`;

interface Theme {
  theme: string;
  favicon: string;
  svg: JSX.Element;
}

export const Themes = {
  LIGHT: {
    theme: 'light',
    favicon: `/src/assets/light-toggle.svg`,
    svg: <LightSVG />,
  },
  DARK: {
    theme: 'dark',
    favicon: `/src/assets/dark-toggle.svg`,
    svg: <DarkSVG />,
  },
};

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = React.useState<Theme>(Themes.DARK);
  const nextTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
  const favicon = document.querySelector<HTMLLinkElement>('#favicon');

  React.useEffect(() => {
    document.body.dataset.theme = theme.theme;
    favicon ? (favicon.href = theme.favicon) : '';
  }, [theme]);

  const updateTheme = (): void => {
    setTheme(nextTheme);
  };

  return <SVGButton onClick={updateTheme}>{theme.svg}</SVGButton>;
};
