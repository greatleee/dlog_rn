import { RecordDrinkModalAtomType } from '@atoms/recordDrinkModal.atoms';
import firestore from '@react-native-firebase/firestore';
import localStorage from '../utils/local-storage';

const _addRecord = async (
  userId: string,
  recordState: RecordDrinkModalAtomType
) => {
  const { id, ...rest } = recordState;

  try {
    const record = await firestore()
      .collection('users')
      .doc(userId)
      .collection('records')
      .add(rest);
    return record.id;
  } catch (e) {
    console.debug('Failed to create Record to firestore: ', e);
    return '';
  }
};

const _updateRecord = async (
  userId: string,
  recordState: RecordDrinkModalAtomType
) => {
  const { id, ...rest } = recordState;

  try {
    const record = await firestore()
      .collection('users')
      .doc(userId)
      .collection('records')
      .doc(id)
      .update(rest);
    return id;
  } catch (e) {
    console.debug('Failed to create Record to firestore: ', e);
    return id;
  }
};

const createRecord = async (record: RecordDrinkModalAtomType) => {
  const userId = await localStorage.getUserId();
  if (!userId) return;

  if (record.id) {
    return await _updateRecord(userId, record);
  } else {
    return await _addRecord(userId, record);
  }
};

export default { createRecord };
