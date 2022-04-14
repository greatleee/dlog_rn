import styled from '@emotion/native';
import React, { useEffect } from 'react';
import { Button, Text } from 'react-native';
import { useSetRecoilState } from 'recoil';
import DrinkAmountSection from '@components/RecordDrinkModal/DrinkAmountSection';
import RecordDrinkModalSection from '@components/RecordDrinkModal/Section';
import { recordDrinkModalAtom } from '../atoms/recordDrinkModal.atoms';
import RootNavigation, {
  NavigatorParamList,
} from '../navigators/RootNavigation';
import { DrinkTypes } from '../models/drinkType';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<NavigatorParamList, 'RecordDrinkModal'>;

const RecordDrinkModal: React.FC<Props> = ({ route }) => {
  const setRecordDrinkModalState = useSetRecoilState(recordDrinkModalAtom);

  useEffect(() => {
    setRecordDrinkModalState({
      createdAt: new Date(route.params.date),
      drinkAmounts: [
        { type: DrinkTypes.BEER, amount: 0 },
        { type: DrinkTypes.SOJU, amount: 0 },
      ],
    });
  }, []);

  return (
    <Container style={{ flex: 1 }}>
      <Button
        title="Dismiss"
        onPress={() => {
          RootNavigation.goBack();
        }}
      />
      <DrinkAmountSection />
      <RecordDrinkModalSection title="마시고 상태가 어땠오?">
        <Text>Test2</Text>
      </RecordDrinkModalSection>
      <RecordDrinkModalSection title="기분이 어땠오?">
        <Text>Test3</Text>
      </RecordDrinkModalSection>
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 16px;
`;

export default RecordDrinkModal;
