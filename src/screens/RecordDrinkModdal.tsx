import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootNavigation from '../navigators/RootNavigation';

const RecordDrinkModal = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Modal</Text>
      <Button
        title="Dismiss"
        onPress={() => {
          RootNavigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default RecordDrinkModal;
