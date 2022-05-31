import { atom } from 'recoil';
import type { RecordDrinkModalAtomType } from './recordDrinkModal.atoms';

export type CalendarStateType = {
  [date: string]: RecordDrinkModalAtomType;
};

export const calendarState = atom<CalendarStateType>({
  key: 'calendarState',
  default: {},
});
