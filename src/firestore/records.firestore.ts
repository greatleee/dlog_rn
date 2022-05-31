import { CalendarStateType } from '@atoms/calendar.states';
import { RecordDrinkModalAtomType } from '@atoms/recordDrinkModal.atoms';
import firestore from '@react-native-firebase/firestore';
import localStorage from '../utils/local-storage';

const _addRecord = async (
  userId: string,
  recordState: RecordDrinkModalAtomType
) => {
  try {
    const record = await firestore()
      .collection('users')
      .doc(userId)
      .collection('records')
      .doc(recordState.date.getTime().toString())
      .set(recordState);
  } catch (e) {
    console.debug('Failed to create Record to firestore: ', e);
  }
};

const createRecord = async (record: RecordDrinkModalAtomType) => {
  const userId = await localStorage.getUserId();
  if (!userId) return;

  await _addRecord(userId, record);
};

const getRecords = async (yearMonth: string): Promise<CalendarStateType> => {
  const userId = await localStorage.getUserId();
  if (!userId) return {};

  const [year, month] = yearMonth.split('-');
  const firstDate = new Date(parseInt(year), parseInt(month) - 1);
  const lastDate = new Date(parseInt(year), parseInt(month));
  const querySnapshot = await firestore()
    .collection('users')
    .doc(userId)
    .collection('records')
    .where('date', '>=', firestore.Timestamp.fromDate(firstDate))
    .where('date', '<', firestore.Timestamp.fromDate(lastDate))
    .orderBy('date', 'asc')
    .get();

  const calendar = {};
  querySnapshot.forEach(doc => {
    const record = doc.data();
    const date = new Date(record.date.seconds * 1000);
    Object.assign(calendar, {
      [date.getDate()]: {
        drinkAmounts: record.drinkAmounts,
        status: record.status,
        emotion: record.emotion,
        date: new Date(record.date.seconds * 1000),
        createdAt: new Date(record.createdAt.seconds * 1000),
      },
    });
  });

  return calendar;
};

export default { createRecord, getRecords };
