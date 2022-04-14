import React from 'react';
import styled from '@emotion/native';
import RootNavigation from '../../navigators/RootNavigation';

type Props = {
  date: Date;
  dateNum: number;
};

const CalendarBodyItem: React.FC<Props> = ({ date, dateNum }) => {
  const openRecordDrinkModal = () =>
    RootNavigation.navigate('RecordDrinkModal', { date: date.toISOString() });

  return (
    <>
      <DateText>{dateNum}</DateText>
      <DrinkImageTouchable onPress={openRecordDrinkModal}>
        <DrinkImage
          source={require('../../assets/images/soju/empty.png')}
          style={{ resizeMode: 'cover' }}
        />
      </DrinkImageTouchable>
    </>
  );
};

const DateText = styled.Text`
  height: 15%;
  /* background-color: green; */
  font-size: 16px;
  text-align: center;
`;

const DrinkImageTouchable = styled.TouchableOpacity`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

const DrinkImage = styled.Image`
  width: 100%;
  height: 90%;
  opacity: 0.3;
`;

export default CalendarBodyItem;
