import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {isTablet} from 'react-native-device-info';

const ActionButton = ({buttonText, style, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    padding: isTablet() ? 15 : 10,
    color: colors.primary,
    fontSize: isTablet() ? 18 : 14,
    fontWeight: 'bold',
  },
});
