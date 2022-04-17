import { recordDrinkModalAtom } from '@atoms/recordDrinkModal.atoms';
import styled from '@emotion/native';
import {
  DrinkStatusModelList,
  DrinkStatusType,
} from '@models/drinkStatus.models';
import React from 'react';
import { useRecoilState } from 'recoil';
import RecordDrinkModalSection from './Section';

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
    else return 0.4;
  };

  return (
    <RecordDrinkModalSection title={title}>
      <ImageList>
        {DrinkStatusModelList.map(drinkStatusModel => (
          <StatusImageTouchable
            onPress={choose.bind(null, drinkStatusModel.type)}
          >
            <StatusImage
              source={drinkStatusModel.imgSrc}
              style={{
                resizeMode: 'cover',
                opacity: getOpacity(drinkStatusModel.type),
              }}
            />
          </StatusImageTouchable>
        ))}
      </ImageList>
    </RecordDrinkModalSection>
  );
};

const ImageList = styled.View`
  width: 100%;
  height: 130px;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StatusImageTouchable = styled.TouchableOpacity`
  width: 15%;
  height: 100%;
`;

const StatusImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export default StatusSection;
