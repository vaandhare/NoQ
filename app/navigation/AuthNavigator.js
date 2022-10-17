import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthNavigator = ({setUserStatus}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{setUserStatus: setUserStatus}}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
