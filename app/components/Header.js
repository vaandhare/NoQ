import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';
import {isTablet} from 'react-native-device-info';

const Header = ({header, onBackPress, isLogout, onLogoutPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={onBackPress}>
        <MaterialIcons
          name="arrow-back"
          color={colors.white}
          size={isTablet() ? 32 : 24}
        />
      </TouchableOpacity>
      <Text style={styles.header}>{header}</Text>
      {isLogout && (
        <TouchableOpacity activeOpacity={0.5} onPress={onLogoutPress}>
          <MaterialIcons
            name="logout"
            color={colors.white}
            size={isTablet() ? 32 : 24}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: isTablet() ? 24 : 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: isTablet() ? 30 : 20,
    color: colors.white,
  },
});
