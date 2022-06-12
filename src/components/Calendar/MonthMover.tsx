import { calendarState } from '@atoms/calendar.states';
import styled from '@emotion/native';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import { curYearMonthAtom } from '../../atoms/states';
import recordsFirestore from '../../firestore/records.firestore';
import Chip from '../@shared/Chip';

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const IconTouchable = styled.TouchableOpacity`
  width: 48px;
  height: 100%;
  align-items: center;
`;

const MonthMover: React.FC = () => {
  const [curYearMonth, setCurYearMonth] = useRecoilState(curYearMonthAtom);
  const [calendar, setCalendar] = useRecoilState(calendarState);

  useEffect(() => {
    loadRecords();
  }, [curYearMonth]);

  const loadRecords = async () => {
    const records = await recordsFirestore.getRecords(curYearMonth);
    setCalendar(records);
  };

  const moveMonth = (step: number) => {
    const date = new Date(curYearMonth);
    date.setMonth(date.getMonth() + step);
    setCurYearMonth(format(date, 'yyyy-MM'));
  };

  return (
    <Container>
      <IconTouchable onPress={() => moveMonth(-1)}>
        <Icon name="chevron-back" size={24} color="#131B26" />
      </IconTouchable>
      <Chip bgColor="black">
        <Text style={{ color: 'white', fontSize: 12 }}>
          {format(new Date(curYearMonth), 'yyyy년 MM월')}
        </Text>
      </Chip>
      <IconTouchable onPress={() => moveMonth(1)}>
        <Icon name="chevron-forward" size={24} color="#131B26" />
      </IconTouchable>
    </Container>
  );
};

export default MonthMover;
