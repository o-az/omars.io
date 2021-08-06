import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 80px;
  height: 70px;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const Icon = styled.div`
  align-self: center;
`;

const Title = styled.a`
  align-self: center;
`;

interface SocialProps {
  title: string;
  icon: JSX.Element;
  url: string;
}

export const Social: React.FC<SocialProps> = (props: SocialProps) => {
  const { title, icon, url } = props;
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title href={url} target="_blank">
        {title}
      </Title>
    </Container>
  );
};
