import { calendarState } from '@atoms/calendar.states';
import { recordModalAtom } from '@atoms/record-modal.atoms';
import { recordDrinkModalAtom } from '@atoms/recordDrinkModal.atoms';
import { INACTIVE_IMAGE_OPACITY } from '@constants/styles';
import styled from '@emotion/native';
import { DrinkTypes } from '@models/drinkType';
import React from 'react';
import { useRecoilState } from 'recoil';

type Props = {
  date: Date;
  dateNum: number;
};

const CalendarBodyItem: React.FC<Props> = ({ date, dateNum }) => {
  const [calendar] = useRecoilState(calendarState);
  const [isRecordModalVisible, setIsRecordModalVisible] =
    useRecoilState(recordModalAtom);
  const [recordState, setRecordDrinkModalState] =
    useRecoilState(recordDrinkModalAtom);

  const openRecordModal = () => {
    const record = calendar[dateNum.toString()];
    if (record) {
      setRecordDrinkModalState(record);
    } else {
      setRecordDrinkModalState({
        drinkAmounts: [
          { type: DrinkTypes.BEER, amount: 0 },
          { type: DrinkTypes.SOJU, amount: 0 },
        ],
        status: null,
        emotion: null,
        date: date,
        createdAt: new Date(),
      });
    }

    setIsRecordModalVisible(true);
  };

  const getDrinkImageComponent = () => {
    const empty = require('../../assets/images/soju/empty.png');
    const normal = require('../../assets/images/soju/normal.png');
    const good = require('../../assets/images/soju/good.png');
    const dizzy = require('../../assets/images/soju/dizzy.png');
    const vomit = require('../../assets/images/soju/vomit.png');
    const blackout = require('../../assets/images/soju/blackout.png');
    const joy = require('../../assets/images/soju/joy.png');
    const angry = require('../../assets/images/soju/angry.png');
    const sad = require('../../assets/images/soju/sad.png');
    const crying = require('../../assets/images/soju/crying.png');

    const record = calendar[dateNum.toString()];
    let source;
    let opacity = 1;
    switch (record?.status || record?.emotion) {
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
      case 'JOY':
        source = joy;
        break;
      case 'ANGRY':
        source = angry;
        break;
      case 'SAD':
        source = sad;
        break;
      case 'CRYING':
        source = crying;
        break;
      default:
        source = empty;
    }
    if (
      !(record?.drinkAmounts.filter(d => d.amount > 0)?.length > 0) &&
      !record?.status &&
      !record?.emotion
    ) {
      opacity = INACTIVE_IMAGE_OPACITY;
    }
    return (
      <DrinkImage source={source} style={{ resizeMode: 'cover', opacity }} />
    );
  };

  return (
    <>
      <DateText>{dateNum}</DateText>
      <DrinkImageTouchable onPress={openRecordModal}>
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
