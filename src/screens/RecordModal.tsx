import { recordModalAtom } from '@atoms/record-modal.atoms';
import { recordDrinkModalAtom } from '@atoms/recordDrinkModal.atoms';
import Button from '@components/@shared/CustomButton';
import DrinkAmountSection from '@components/RecordDrinkModal/DrinkAmountSection';
import EmotionSection from '@components/RecordDrinkModal/EmotionSection';
import StatusSection from '@components/RecordDrinkModal/StatusSection';
import styled from '@emotion/native';
import { format } from 'date-fns';
import locale from 'date-fns/locale/ko';
import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import recordsFirestore from '../firestore/records.firestore';

const RecordModal = () => {
  const [isRecordModalVisible, setIsRecordModalVisible] =
    useRecoilState(recordModalAtom);
  const [recordState, setRecordDrinkModalState] =
    useRecoilState(recordDrinkModalAtom);

  const close = () => {
    setIsRecordModalVisible(false);
  };

  const submit = async () => {
    await recordsFirestore.createRecord(recordState);
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
          <Button bgColor="#0000ff" textColor="#ffffff" onPress={submit}>
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
