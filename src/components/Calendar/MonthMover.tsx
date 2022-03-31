import styled from '@emotion/native';
import { format } from 'date-fns';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import { curYearMonthAtom } from '../../atoms/states';
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

  const moveMonth = (step: number) => {
    const date = new Date(curYearMonth);
    date.setMonth(date.getMonth() + step);
    setCurYearMonth(format(date, 'yyyy-MM'));
  };

  return (
    <Container>
      <IconTouchable onPress={() => moveMonth(-1)}>
        <Icon name="chevron-back" size={24} />
      </IconTouchable>
      <Chip bgColor="black">
        <Text style={{ color: 'white' }}>
          {format(new Date(curYearMonth), 'yyyy년 MM월')}
        </Text>
      </Chip>
      <IconTouchable onPress={() => moveMonth(1)}>
        <Icon name="chevron-forward" size={24} />
      </IconTouchable>
    </Container>
  );
};

export default MonthMover;
