import { calendarState } from '@atoms/calendar.states';
import { recordModalAtom } from '@atoms/record-modal.atoms';
import { recordDrinkModalAtom } from '@atoms/recordDrinkModal.atoms';
import { DrinkTypes } from '@models/drinkType';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';

function TabBar({ state, descriptors, navigation }) {
  const [calendar] = useRecoilState(calendarState);
  const [isRecordModalVisible, setIsRecordModalVisible] =
    useRecoilState(recordModalAtom);
  const [recordState, setRecordDrinkModalState] =
    useRecoilState(recordDrinkModalAtom);

  const openRecordModal = () => {
    const now = new Date();
    const record = calendar[now.getDate().toString()];
    if (record) {
      setRecordDrinkModalState(record);
    } else {
      setRecordDrinkModalState({
        drinkAmounts: [
          { type: DrinkTypes.BEER, amount: 0 },
          { type: DrinkTypes.SOJU, amount: 0 },
        ],
        status: null,
        emotion: null,
        date: now,
        createdAt: new Date(),
      });
    }

    setIsRecordModalVisible(true);
  };

  const tabs = () => {
    const tabs = state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigation.navigate({ name: route.name, merge: true });
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
          key={index}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {route.name === 'Calendar' && (
            <>
              <IconFA
                name="calendar"
                size={24}
                color={isFocused ? '#333840' : '#707780'}
                solid={isFocused}
                style={{ marginBottom: 6 }}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: isFocused ? '#333840' : '#707780',
                }}
              >
                캘린더
              </Text>
            </>
          )}
          {route.name === 'Setting' && (
            <>
              <IconIon
                name={isFocused ? 'settings' : 'settings-outline'}
                size={26}
                color={isFocused ? '#333840' : '#707780'}
                style={{ marginBottom: 6 }}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: isFocused ? '#333840' : '#707780',
                }}
              >
                설정
              </Text>
            </>
          )}
        </TouchableOpacity>
      );
    });

    return (
      <>
        {tabs[0]}
        <TouchableOpacity
          accessibilityRole="button"
          onPress={openRecordModal}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconIon
            name="create"
            size={26}
            color="#707780"
            style={{ marginBottom: 6 }}
          />
          <Text style={{ fontSize: 13, color: '#707780' }}>어제 기록</Text>
        </TouchableOpacity>
        {tabs[1]}
      </>
    );
  };

  return (
    <SafeAreaView style={{ flexDirection: 'row', height: 80 }}>
      {tabs()}
    </SafeAreaView>
  );
}

export default TabBar;
