import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {isTablet} from 'react-native-device-info';

const PinButton = ({number, onAddNumber}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onAddNumber}
      activeOpacity={0.8}>
      <Text style={styles.number}>{number}</Text>
    </TouchableOpacity>
  );
};

export default PinButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  number: {
    fontSize: isTablet() ? 30 : 20,
    fontWeight: 'bold',
    color: colors.black,
    padding: isTablet() ? 30 : 15,
  },
});
