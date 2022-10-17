import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';

import AuthNavigator from './navigation/AuthNavigator';
import MainNavigator from './navigation/MainNavigator';
import navigationTheme from './navigation/navigationTheme';
import SplashScreen from './screens/SplashScreen';
import persistStorage from './storage/persistStorage';

const Routes = () => {
  const [userStatus, setUserStatus] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // console.log('userStatus', userStatus)

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    const user = JSON.parse(await persistStorage.getUserDetails());
    // console.log('status', user)
    const result = user && user !== null ? true : false;
    setUserStatus(result);

    setTimeout(() => setIsReady(true), 2000);
  };

  if (!isReady) return <SplashScreen />;

  return (
    <NavigationContainer theme={navigationTheme}>
      {userStatus ? (
        <MainNavigator setUserStatus={setUserStatus} />
      ) : (
        <AuthNavigator setUserStatus={setUserStatus} />
      )}
    </NavigationContainer>
  );
};

export default Routes;
