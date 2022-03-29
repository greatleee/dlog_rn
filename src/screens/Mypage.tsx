import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CalendarBody from '../components/Calendar/CalendarBody';
import CalendarHeader from '../components/Calendar/CalendarHeader';

type ParamList = {
  Calendar: undefined;
  RecordDrinkModal: undefined;
};

type Props = NativeStackScreenProps<ParamList, 'Calendar'>;

const Calendar: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}></SafeAreaView>
  );
};

export default Calendar;
