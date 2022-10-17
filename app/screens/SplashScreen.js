import {StyleSheet, View} from 'react-native';
import React from 'react';
import NoQLogoSVG from '../assets/images/noq_logo.svg';
import colors from '../utils/colors';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <NoQLogoSVG width={260} height={100} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
