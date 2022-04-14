import { atom } from 'recoil';
import { DrinkTypes } from '../models/drinkType';

type DrinkAmountType = {
  type: DrinkTypes;
  amount: number;
};

type RecordDrinkModalAtomType = {
  createdAt: Date | null;
  drinkAmounts: DrinkAmountType[];
};

export const recordDrinkModalAtom = atom<RecordDrinkModalAtomType>({
  key: 'recordDrinkModal',
  default: {
    createdAt: null,
    drinkAmounts: [
      { type: DrinkTypes.BEER, amount: 0 },
      { type: DrinkTypes.SOJU, amount: 0 },
    ],
  },
});
