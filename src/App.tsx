import * as React from 'react';
import styled from 'styled-components';
import { Footer, Header } from './components';
import GlobalStyle from './GlobalStyle';

const AppContainer = styled.div`
  display: grid;
  grid-row-gap: 200px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header'
    '. footer footer .';
`;

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <Header />
      <Footer />
    </AppContainer>
  </>
);
