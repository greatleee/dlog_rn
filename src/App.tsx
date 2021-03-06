/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RecoilRoot } from 'recoil';
import TabBar from './components/@shared/TabBar';
import RootNavigation from './navigators/RootNavigation';
import Calendar from './screens/Calendar';
import RecordModal from './screens/RecordModal';
import Setting from './screens/Setting';
import localStorage from './utils/local-storage';

// const Section: React.FC<{
//   title: string;
// }> = ({ children, title }) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{ tabBarLabel: '월별캘린더' }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{ tabBarLabel: '설정' }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    localStorage.initiateUserId();
  }, []);

  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer ref={RootNavigation.navigationRef}>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Group>
              <RootStack.Screen name="Main" component={Main} />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
        <RecordModal></RecordModal>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default App;
