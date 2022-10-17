import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import DeviceSettingItem from '../components/DeviceSettingItem';
import colors from '../utils/colors';

const DeviceSettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        header="DEVICE SETTINGS"
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.child}>
        <DeviceSettingItem
          icon="printer-outline"
          text="PRINTERS & CASH DRAWER"
        />

        <DeviceSettingItem icon="credit-card" text="CARD READER" />

        <DeviceSettingItem
          icon="application-cog-outline"
          text="FUNCTIONALITIES SETTINGS"
          onPress={() => navigation.navigate('FunctionalitySettings')}
        />
      </View>
    </View>
  );
};

export default DeviceSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
});
