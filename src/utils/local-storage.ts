import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import UsersFirestore from '../firestore/users.firestore';

const _issueNewUserId = async () => {
  while (true) {
    const newUserId = uuidv4();
    console.debug('newUserId: ', newUserId);
    const isAlreadyExists = await UsersFirestore.createUser(newUserId);
    if (!isAlreadyExists) return newUserId;
    console.debug('issueFailed');
  }
};

const initiateUserId = async () => {
  try {
    const userId = await getUserId();
    if (userId === null) {
      const newUserId = await _issueNewUserId();
      await AsyncStorage.setItem('@userId', newUserId);
    }
  } catch (e) {
    // saving error
    console.debug('Initiate userId failed: ', e);
  }
};

const getUserId = async (): Promise<string | null> => {
  try {
    const userId = await AsyncStorage.getItem('@userId');
    return userId;
  } catch (e) {
    console.debug('Get userId failed: ', e);
    return null;
  }
};

export default {
  initiateUserId,
  getUserId,
};
