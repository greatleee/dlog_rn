import React from 'react';
import { useCalendar } from '@h6s/calendar';
import styled from '@emotion/native';
import { format } from 'date-fns';
import locale from 'date-fns/locale/ko';

const Tr = styled.View`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Th = styled.View`
  width: 13%;
  /* background-color: blue; */
`;

const DayText = styled.Text`
  font-size: 15px;
  text-align: center;
`;

const CalendarHeader: React.FC = () => {
  const { headers } = useCalendar();

  return (
    <Tr>
      {headers.weekDays.map(({ key, value }) => (
        <Th key={key}>
          <DayText>{format(value, 'E', { locale })}</DayText>
        </Th>
      ))}
    </Tr>
  );
};

export default CalendarHeader;
