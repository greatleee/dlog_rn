import React from 'react';
import { SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CalendarBody from '../components/Calendar/CalendarBody';
import CalendarHeader from '../components/Calendar/CalendarHeader';
import styled from '@emotion/native';
import MonthMover from '../components/Calendar/MonthMover';

type ParamList = {
  Calendar: undefined;
  RecordDrinkModal: undefined;
};

type Props = NativeStackScreenProps<ParamList, 'Calendar'>;

const MonthMoverContainer = styled.View`
  width: 100%;
  height: 24px;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: 50px;
`;

const BodyContainer = styled.View`
  width: 100%;
  flex: 1;
  padding-bottom: 30px;
`;

const Calendar: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MonthMoverContainer>
        <MonthMover></MonthMover>
      </MonthMoverContainer>

      <HeaderContainer>
        <CalendarHeader />
      </HeaderContainer>

      <BodyContainer>
        <CalendarBody />
      </BodyContainer>
    </SafeAreaView>
  );
};

export default Calendar;
