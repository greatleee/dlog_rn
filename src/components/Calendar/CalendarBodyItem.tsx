import { INACTIVE_IMAGE_OPACITY } from '@constants/styles';
import styled from '@emotion/native';
import React from 'react';
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
          style={{ resizeMode: 'cover', opacity: INACTIVE_IMAGE_OPACITY }}
        />
      </DrinkImageTouchable>
    </>
  );
};

const DateText = styled.Text`
  height: 15%;
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
`;

export default CalendarBodyItem;
