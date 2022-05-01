import firestore from '@react-native-firebase/firestore';

const createUser = async (userId: string) => {
  const userRef = firestore().collection('users').doc(userId);

  let isUserIdAlreadyExists = false;
  await firestore().runTransaction(async transaction => {
    const userSnapshot = await transaction.get(userRef);

    if (userSnapshot.exists) {
      isUserIdAlreadyExists = true;
    }

    transaction.set(userRef, {});
  });

  return isUserIdAlreadyExists;
};

export default { createUser };
