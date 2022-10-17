import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ActionButton from './ActionButton';
import colors from '../utils/colors';
import {isTablet} from 'react-native-device-info';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <ActionButton
            buttonText="5 New Pre-orders"
            style={[styles.pinkButton, styles.leftButton]}
            textStyle={styles.buttonText}
          />
        </View>
        <View style={styles.button}>
          <ActionButton
            buttonText="2 Open Tabs"
            style={[styles.pinkButton, styles.rightButton]}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 25,
    marginBottom: 10,
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
  pinkButton: {
    backgroundColor: colors.secondary,
  },
  buttonText: {
    color: colors.white,
  },
});
