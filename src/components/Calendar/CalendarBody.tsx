import React, { useEffect } from 'react';
import { useCalendar } from '@h6s/calendar';
import styled from '@emotion/native';
import CalendarBodyItem from './CalendarBodyItem';
import { useRecoilState } from 'recoil';
import { curYearMonthAtom } from '../../atoms/states';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Tr = styled.View`
  /* background-color: yellow; */
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Td = styled.View`
  width: 13%;
  height: 100%;
  /* background-color: blue; */
`;

const CalendarBody: React.FC = () => {
  const [curYearMonth] = useRecoilState(curYearMonthAtom);

  const defaultDate = new Date();
  const { body, navigation } = useCalendar({ defaultDate });

  useEffect(() => {
    navigation.setDate(new Date(curYearMonth));
  }, [curYearMonth]);

  const getTrHeight = (rowLength: number) => {
    return `${Math.floor(100 / rowLength)}%`;
  };

  return (
    <Container>
      {body.value.map(({ key, value: days }) => (
        <Tr key={key} style={{ height: getTrHeight(body.value.length) }}>
          {days.map(({ key, date, isCurrentDate, isCurrentMonth }) => (
            <Td key={key}>
              {isCurrentMonth && <CalendarBodyItem date={date} />}
            </Td>
          ))}
        </Tr>
      ))}
    </Container>
  );
};

export default CalendarBody;
