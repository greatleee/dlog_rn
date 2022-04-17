import { recordDrinkModalAtom } from '@atoms/recordDrinkModal.atoms';
import {
  DrinkEmotionModelList,
  DrinkEmotionType,
} from '@models/drinkEmotion.models';
import React from 'react';
import { useRecoilState } from 'recoil';
import ImageListSection from './ImageListSection';

const EmotionSection: React.FC = () => {
  const title = '이날 기분이 어땠오?';
  const [state, setState] = useRecoilState(recordDrinkModalAtom);

  const choose = (emotionType: DrinkEmotionType) => {
    setState({
      ...state,
      emotion: emotionType,
    });
  };

  const getOpacity = (emotionType: DrinkEmotionType) => {
    if (state.emotion === emotionType) return 1;
    else return 0.4;
  };

  return (
    <ImageListSection
      title={title}
      modelList={DrinkEmotionModelList}
      onPressImage={choose}
      onChangeImage={getOpacity}
    />
  );
};

export default EmotionSection;
