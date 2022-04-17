import { recordDrinkModalAtom } from '@atoms/recordDrinkModal.atoms';
import { INACTIVE_IMAGE_OPACITY } from '@constants/styles';
import {
  DrinkStatusModelList,
  DrinkStatusType,
} from '@models/drinkStatus.models';
import React from 'react';
import { useRecoilState } from 'recoil';
import ImageListSection from './ImageListSection';

const StatusSection: React.FC = () => {
  const title = '마시고 상태가 어땠오?';
  const [state, setState] = useRecoilState(recordDrinkModalAtom);

  const choose = (drinkStatusType: DrinkStatusType) => {
    setState({
      ...state,
      status: drinkStatusType,
    });
  };

  const getOpacity = (drinkStatusType: DrinkStatusType) => {
    if (state.status === drinkStatusType) return 1;
    else return INACTIVE_IMAGE_OPACITY;
  };

  return (
    <ImageListSection
      title={title}
      modelList={DrinkStatusModelList}
      onPressImage={choose}
      onChangeImage={getOpacity}
    />
  );
};

export default StatusSection;
