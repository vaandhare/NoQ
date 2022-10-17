import AsyncStorage from '@react-native-async-storage/async-storage';

const userLoginStatusKey = 'USER_LOGIN_STATUS';
const functionalitiesSettingDataKey = 'FUNCTIONLITIES_SETTING_DATA_KEY';
const functionalitiesSettingLeftDataKey =
  'FUNCTIONLITIES_SETTING_LEFT_DATA_KEY';
const functionalitiesSettingRightDataKey =
  'FUNCTIONLITIES_SETTING_TIGHT_DATA_KEY';

const storeUserDetails = async data => {
  try {
    data
      ? await AsyncStorage.setItem(userLoginStatusKey, JSON.stringify(data))
      : await AsyncStorage.removeItem(userLoginStatusKey);
  } catch (error) {
    console.log('Error in storing User Login Status', error);
  }
};

const getUserDetails = async () => {
  try {
    return await AsyncStorage.getItem(userLoginStatusKey);
  } catch (error) {
    console.log('Error in fetching User Login Status', error);
  }
};

const storeFunctionalitiesSettingData = async data => {
  try {
    const obj = {data: data};
    console.log('obj', JSON.stringify(obj));
    await AsyncStorage.setItem(
      functionalitiesSettingDataKey,
      JSON.stringify(obj),
    );
  } catch (error) {
    console.log('Error in storing Functionalities Setting Data', error);
  }
};

const getFunctionalitiesSettingData = async () => {
  try {
    return await AsyncStorage.getItem(functionalitiesSettingDataKey);
  } catch (error) {
    console.log('Error in fetching Functionalities Setting Data', error);
  }
};

const storeFunctionalitiesLeftSettingData = async data => {
  try {
    const obj = {data: data};
    console.log('obj', JSON.stringify(obj));
    await AsyncStorage.setItem(
      functionalitiesSettingLeftDataKey,
      JSON.stringify(obj),
    );
  } catch (error) {
    console.log('Error in storing Functionalities Left Setting Data', error);
  }
};

const getFunctionalitiesLeftSettingData = async () => {
  try {
    return await AsyncStorage.getItem(functionalitiesSettingLeftDataKey);
  } catch (error) {
    console.log('Error in fetching Functionalities Left Setting Data', error);
  }
};

const storeFunctionalitiesRightSettingData = async data => {
  try {
    const obj = {data: data};
    console.log('obj', JSON.stringify(obj));
    await AsyncStorage.setItem(
      functionalitiesSettingRightDataKey,
      JSON.stringify(obj),
    );
  } catch (error) {
    console.log('Error in storing Functionalities Left Setting Data', error);
  }
};

const getFunctionalitiesRightSettingData = async () => {
  try {
    return await AsyncStorage.getItem(functionalitiesSettingRightDataKey);
  } catch (error) {
    console.log('Error in fetching Functionalities Right Setting Data', error);
  }
};

export default {
  storeUserDetails,
  getUserDetails,
  storeFunctionalitiesSettingData,
  getFunctionalitiesSettingData,
  storeFunctionalitiesLeftSettingData,
  getFunctionalitiesLeftSettingData,
  storeFunctionalitiesRightSettingData,
  getFunctionalitiesRightSettingData,
};
