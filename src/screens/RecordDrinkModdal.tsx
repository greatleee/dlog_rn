import Button from '@components/@shared/CustomButton';
import DrinkAmountSection from '@components/RecordDrinkModal/DrinkAmountSection';
import EmotionSection from '@components/RecordDrinkModal/EmotionSection';
import StatusSection from '@components/RecordDrinkModal/StatusSection';
import styled from '@emotion/native';
import { StackScreenProps } from '@react-navigation/stack';
import { format } from 'date-fns';
import locale from 'date-fns/locale/ko';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import { recordDrinkModalAtom } from '../atoms/recordDrinkModal.atoms';
import recordsFirestore from '../firestore/records.firestore';
import { DrinkTypes } from '../models/drinkType';
import RootNavigation, {
  NavigatorParamList,
} from '../navigators/RootNavigation';

type Props = StackScreenProps<NavigatorParamList, 'RecordDrinkModal'>;

const RecordDrinkModal: React.FC<Props> = ({ route }) => {
  const [recordState, setRecordDrinkModalState] =
    useRecoilState(recordDrinkModalAtom);

  useEffect(() => {
    setRecordDrinkModalState({
      drinkAmounts: [
        { type: DrinkTypes.BEER, amount: 0 },
        { type: DrinkTypes.SOJU, amount: 0 },
      ],
      status: null,
      emotion: null,
      date: new Date(route.params.date),
      createdAt: new Date(),
    });
  }, []);

  const close = () => RootNavigation.goBack();

  const submit = async () => {
    await recordsFirestore.createRecord(recordState);
    close();
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header>
        <TouchableOpacity onPress={close}>
          <Icon name="close-outline" size={26} />
        </TouchableOpacity>
        <DateText>
          {format(new Date(route.params.date), 'MM월 dd일 (E)', { locale })}
        </DateText>
      </Header>
      <ScrollView>
        <DrinkAmountSection />
        <StatusSection />
        <EmotionSection />
      </ScrollView>
      <Button bgColor="#0000ff" textColor="#ffffff" onPress={submit}>
        기록하기
      </Button>
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 16px 48px 16px;
`;

const Header = styled.View`
  width: 100%;
  margin-bottom: 16px;
  flex-direction: row;
`;

const DateText = styled.Text`
  padding-right: 26px;
  flex: 1;
  font-size: 20px;
  text-align: center;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

export default RecordDrinkModal;
