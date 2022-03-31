import styled from '@emotion/native';
import React from 'react';
import { Button, Text } from 'react-native';
import RecordDrinkModalSection from '../components/RecordDrinkModal/Section';
import RootNavigation from '../navigators/RootNavigation';

const Container = styled.View`
  padding: 20px 16px;
`;

const RecordDrinkModal = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Button
        title="Dismiss"
        onPress={() => {
          RootNavigation.goBack();
        }}
      />
      <RecordDrinkModalSection title="얼마나 마셨오?">
        <Text>Test</Text>
      </RecordDrinkModalSection>
      <RecordDrinkModalSection title="마시고 상태가 어땠오?">
        <Text>Test2</Text>
      </RecordDrinkModalSection>
      <RecordDrinkModalSection title="기분이 어땠오?">
        <Text>Test3</Text>
      </RecordDrinkModalSection>
    </Container>
  );
};

export default RecordDrinkModal;
