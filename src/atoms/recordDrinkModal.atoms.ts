import { DrinkEmotionType } from '@models/drinkEmotion.models';
import { DrinkStatusType } from '@models/drinkStatus.models';
import { DrinkTypes } from '@models/drinkType';
import { atom } from 'recoil';

type DrinkAmountType = {
  type: DrinkTypes;
  amount: number;
};

export type RecordDrinkModalAtomType = {
  drinkAmounts: DrinkAmountType[];
  status: DrinkStatusType | null;
  emotion: DrinkEmotionType | null;
  date: Date;
  createdAt: Date;
};

export const recordDrinkModalAtom = atom<RecordDrinkModalAtomType>({
  key: 'recordDrinkModal',
  default: {
    drinkAmounts: [
      { type: DrinkTypes.BEER, amount: 0 },
      { type: DrinkTypes.SOJU, amount: 0 },
    ],
    status: null,
    emotion: null,
    date: new Date(),
    createdAt: new Date(),
  },
});
