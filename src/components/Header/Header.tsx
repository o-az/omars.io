import * as React from 'react';
import styled from 'styled-components';
import { ThemeSwitcher } from './ThemeSwitcher';

const HeaderContainer = styled.header`
  grid-area: header;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Header: React.FC = () => (
  <HeaderContainer>
    <ThemeSwitcher />
  </HeaderContainer>
);
