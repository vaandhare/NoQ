import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import ActionButton from './ActionButton';
import {isTablet} from 'react-native-device-info';

const Actions = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Actions</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <ActionButton buttonText="Clock in/out" style={styles.leftButton} />
        </View>
        <View style={styles.button}>
          <ActionButton
            buttonText="Device Setting"
            style={styles.rightButton}
            onPress={() => navigation.navigate('DeviceSettings')}
          />
        </View>
      </View>

      <View style={styles.registerButton}>
        <ActionButton
          buttonText="Open Register"
          style={styles.middleButton}
          textStyle={styles.middleButtonText}
        />
      </View>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 25,
  },
  header: {
    fontSize: isTablet() ? 26 : 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: isTablet() ? 20 : 10,
  },
  button: {
    flex: 1,
  },
  leftButton: {
    marginRight: 15,
  },
  rightButton: {
    marginLeft: 15,
  },
  registerButton: {
    marginTop: isTablet() ? 30 : 15,
    alignItems: isTablet() ? 'flex-start' : 'center',
  },
  middleButton: {
    backgroundColor: colors.green,
    width: isTablet() ? '47%' : 180,
  },
  middleButtonText: {
    color: colors.white,
  },
});
