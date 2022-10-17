import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import {isTablet} from 'react-native-device-info';

const DeviceSettingItem = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        color={colors.primary}
        size={isTablet() ? 36 : 28}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default DeviceSettingItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    marginHorizontal: isTablet() ? 30 : 10,
  },
  text: {
    paddingStart: isTablet() ? 30 : 20,
    fontSize: isTablet() ? 20 : 17,
    color: colors.black,
    fontWeight: 'bold',
  },
});
