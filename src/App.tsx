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
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RecoilRoot } from 'recoil';
import TabBar from './components/@shared/TabBar';
import RootNavigation from './navigators/RootNavigation';
import Calendar from './screens/Calendar';
import RecordDrinkModal from './screens/RecordDrinkModdal';

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
    </Tab.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer ref={RootNavigation.navigationRef}>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Group>
              <RootStack.Screen name="Main" component={Main} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
              <RootStack.Screen
                name="RecordDrinkModal"
                component={RecordDrinkModal}
              />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
