import DrinkAmountSection from '@components/RecordDrinkModal/DrinkAmountSection';
import EmotionSection from '@components/RecordDrinkModal/EmotionSection';
import StatusSection from '@components/RecordDrinkModal/StatusSection';
import styled from '@emotion/native';
import { StackScreenProps } from '@react-navigation/stack';
import { format } from 'date-fns';
import locale from 'date-fns/locale/ko';
import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { recordDrinkModalAtom } from '../atoms/recordDrinkModal.atoms';
import { DrinkTypes } from '../models/drinkType';
import RootNavigation, {
  NavigatorParamList,
} from '../navigators/RootNavigation';

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
      status: null,
      emotion: null,
    });
  }, []);

  return (
    <Container style={{ flex: 1 }}>
      <DateText>
        {format(new Date(route.params.date), 'MM월 dd일 (E)', { locale })}
      </DateText>
      <DrinkAmountSection />
      <StatusSection />
      <EmotionSection />
      <Button
        title="Dismiss"
        onPress={() => {
          RootNavigation.goBack();
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 16px;
`;

const DateText = styled.Text`
  width: 100%;
  margin-bottom: 16px;
  font-size: 20px;
  text-align: center;
`;

export default RecordDrinkModal;
