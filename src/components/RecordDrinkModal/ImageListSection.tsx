import styled from '@emotion/native';
import { DrinkStatusModelList } from '@models/drinkStatus.models';
import React from 'react';
import RecordDrinkModalSection from './Section';

type Props = {
  title: string;
  modelList: typeof DrinkStatusModelList;
  onPressImage: (type: any) => void;
  onChangeImage: (type: any) => number;
};

const StatusSection: React.FC<Props> = ({
  title,
  modelList,
  onPressImage,
  onChangeImage,
}) => {
  return (
    <RecordDrinkModalSection title={title}>
      <ImageList>
        {modelList.map(model => (
          <StatusImageTouchable onPress={onPressImage.bind(null, model.type)}>
            <StatusImage
              source={model.imgSrc}
              style={{
                resizeMode: 'cover',
                opacity: onChangeImage(model.type),
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
