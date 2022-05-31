import { calendarState } from '@atoms/calendar.states';
import { INACTIVE_IMAGE_OPACITY } from '@constants/styles';
import styled from '@emotion/native';
import React from 'react';
import { useRecoilState } from 'recoil';
import RootNavigation from '../../navigators/RootNavigation';

type Props = {
  date: Date;
  dateNum: number;
};

const CalendarBodyItem: React.FC<Props> = ({ date, dateNum }) => {
  const [calendar] = useRecoilState(calendarState);

  const openRecordDrinkModal = () =>
    RootNavigation.navigate('RecordDrinkModal', { date: date.toISOString() });

  const getDrinkImageComponent = () => {
    const empty = require('../../assets/images/soju/empty.png');
    const normal = require('../../assets/images/soju/normal.png');
    const good = require('../../assets/images/soju/good.png');
    const dizzy = require('../../assets/images/soju/dizzy.png');
    const vomit = require('../../assets/images/soju/vomit.png');
    const blackout = require('../../assets/images/soju/blackout.png');

    let source;
    let opacity = 1;
    switch (calendar[dateNum.toString()]?.status) {
      case 'GOOD':
        source = good;
        break;
      case 'NORMAL':
        source = normal;
        break;
      case 'DIZZY':
        source = dizzy;
        break;
      case 'VOMIT':
        source = vomit;
        break;
      case 'BLACK_OUT':
        source = blackout;
        break;
      default:
        source = empty;
        opacity = INACTIVE_IMAGE_OPACITY;
    }
    return (
      <DrinkImage source={source} style={{ resizeMode: 'cover', opacity }} />
    );
  };

  return (
    <>
      <DateText>{dateNum}</DateText>
      <DrinkImageTouchable onPress={openRecordDrinkModal}>
        {getDrinkImageComponent()}
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
