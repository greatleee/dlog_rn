import { ImageSourcePropType } from 'react-native';

export type DrinkStatusType =
  | 'NORMAL'
  | 'GOOD'
  | 'DIZZY'
  | 'VOMIT'
  | 'BLACK_OUT';

type DrinkStatusModelListItemType = {
  type: DrinkStatusType;
  imgSrc: ImageSourcePropType;
  description: string;
};

export const DrinkStatusModelList: DrinkStatusModelListItemType[] = [
  {
    type: 'NORMAL',
    imgSrc: require('@images/soju/normal.png'),
    description: '',
  },
  {
    type: 'GOOD',
    imgSrc: require('@images/soju/good.png'),
    description: '',
  },
  {
    type: 'DIZZY',
    imgSrc: require('@images/soju/dizzy.png'),
    description: '',
  },
  { type: 'VOMIT', imgSrc: require('@images/soju/vomit.png'), description: '' },
  {
    type: 'BLACK_OUT',
    imgSrc: require('@images/soju/blackout.png'),
    description: '',
  },
];
