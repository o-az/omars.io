import * as React from 'react';
import styled from 'styled-components';
import { Social } from '../Social';
import socials from './footer-items';

const Container = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  grid-gap: 2em;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 10px;
`;

export const Footer: React.FC = () => (
  <Container>
    {socials.map((item) => (
      <Social
        key={item.title}
        title={item.title}
        icon={<item.icon />}
        url={item.url}
      />
    ))}
  </Container>
);
