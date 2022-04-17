import { ImageSourcePropType } from 'react-native';

export type DrinkEmotionType = 'NORMAL' | 'JOY' | 'ANGRY' | 'SAD' | 'CRYING';

type DrinkEmotionModelListItemType = {
  type: DrinkEmotionType;
  imgSrc: ImageSourcePropType;
  description: string;
};

export const DrinkEmotionModelList: DrinkEmotionModelListItemType[] = [
  {
    type: 'NORMAL',
    imgSrc: require('@images/soju/normal.png'),
    description: '',
  },
  {
    type: 'JOY',
    imgSrc: require('@images/soju/joy.png'),
    description: '',
  },
  {
    type: 'ANGRY',
    imgSrc: require('@images/soju/angry.png'),
    description: '',
  },
  { type: 'SAD', imgSrc: require('@images/soju/sad.png'), description: '' },
  {
    type: 'CRYING',
    imgSrc: require('@images/soju/crying.png'),
    description: '',
  },
];
