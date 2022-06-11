import { calendarState } from '@atoms/calendar.states';
import { recordModalAtom } from '@atoms/record-modal.atoms';
import { recordDrinkModalAtom } from '@atoms/recordDrinkModal.atoms';
import { curYearMonthAtom } from '@atoms/states';
import Button from '@components/@shared/CustomButton';
import DrinkAmountSection from '@components/RecordDrinkModal/DrinkAmountSection';
import EmotionSection from '@components/RecordDrinkModal/EmotionSection';
import StatusSection from '@components/RecordDrinkModal/StatusSection';
import styled from '@emotion/native';
import { format } from 'date-fns';
import locale from 'date-fns/locale/ko';
import React, { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import recordsFirestore from '../firestore/records.firestore';

const RecordModal = () => {
  const [isRecordModalVisible, setIsRecordModalVisible] =
    useRecoilState(recordModalAtom);
  const [recordState, setRecordDrinkModalState] =
    useRecoilState(recordDrinkModalAtom);
  const [curYearMonth, setCurYearMonth] = useRecoilState(curYearMonthAtom);
  const [calendar, setCalendar] = useRecoilState(calendarState);
  const [isLoading, setIsLoading] = useState(false);

  const close = () => {
    setIsRecordModalVisible(false);
  };

  const loadRecords = async () => {
    const records = await recordsFirestore.getRecords(curYearMonth);
    setCalendar(records);
  };

  const submit = async () => {
    setIsLoading(true);
    await recordsFirestore.createRecord(recordState);
    await loadRecords();
    setIsLoading(false);
    close();
  };

  return (
    <Modal
      animationType="slide"
      visible={isRecordModalVisible}
      onRequestClose={() => {}}
    >
      <Container>
        <StyledView>
          <Header>
            <TouchableOpacity onPress={close}>
              <Icon name="close-outline" size={26} />
            </TouchableOpacity>
            <DateText>
              {format(recordState.date, 'MM월 dd일 (E)', { locale })}
            </DateText>
          </Header>
          <ScrollView>
            <DrinkAmountSection />
            <StatusSection />
            <EmotionSection />
          </ScrollView>
          <Button
            bgColor="#56DDA2"
            textColor="#ffffff"
            isDisabled={isLoading}
            onPress={submit}
          >
            기록하기
          </Button>
        </StyledView>
      </Container>
    </Modal>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const StyledView = styled.View`
  flex: 1;
  padding: 20px 16px 20px 16px;
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

export default RecordModal;
