import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PinScreen from '../screens/PinScreen';
import DeviceSettingsScreen from '../screens/DeviceSettingsScreen';
import FunctionalitySettingsScreen from '../screens/FunctionalitySettingsScreen';
import FunctionalitySettingsScreen2 from '../screens/FunctionalitySettingsScreen2';
import {isTablet} from 'react-native-device-info';

const MainNavigator = ({setUserStatus}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="PIN"
      screenOptions={{headerShown: false, animation: 'none'}}>
      <Stack.Screen
        name="PIN"
        component={PinScreen}
        initialParams={{setUserStatus: setUserStatus}}
      />
      <Stack.Screen name="DeviceSettings" component={DeviceSettingsScreen} />
      <Stack.Screen
        name="FunctionalitySettings"
        component={
          isTablet()
            ? FunctionalitySettingsScreen2
            : FunctionalitySettingsScreen
        }
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
