import { DrinkEmotionType } from '@models/drinkEmotion.models';
import { DrinkStatusType } from '@models/drinkStatus.models';
import { DrinkTypes } from '@models/drinkType';
import { atom } from 'recoil';

type DrinkAmountType = {
  type: DrinkTypes;
  amount: number;
};

type RecordDrinkModalAtomType = {
  createdAt: Date | null;
  drinkAmounts: DrinkAmountType[];
  status: DrinkStatusType | null;
  emotion: DrinkEmotionType | null;
};

export const recordDrinkModalAtom = atom<RecordDrinkModalAtomType>({
  key: 'recordDrinkModal',
  default: {
    createdAt: null,
    drinkAmounts: [
      { type: DrinkTypes.BEER, amount: 0 },
      { type: DrinkTypes.SOJU, amount: 0 },
    ],
    status: null,
    emotion: null,
  },
});
