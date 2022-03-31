import { format } from 'date-fns';
import { atom } from 'recoil';

export const curYearMonthAtom = atom({
  key: 'curYearMonth',
  default: format(new Date(), 'yyyy-MM'),
});
