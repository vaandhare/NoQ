import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {isTablet} from 'react-native-device-info';

const FooterText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        If Register is not open, you can access the terminal to accept
        Pre-orders, by inserting your personal PIN.
      </Text>
    </View>
  );
};

export default FooterText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 20,
    color: colors.white,
    fontSize: isTablet() ? 18 : 14,
  },
});
