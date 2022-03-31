import styled from '@emotion/native';
import React from 'react';
import { View } from 'react-native';

type Props = {
  title: string;
};

const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 35px;
  margin-bottom: 16px;
`;

const RecordDrinkModalSection: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <View>{children}</View>
    </Container>
  );
};

export default RecordDrinkModalSection;
