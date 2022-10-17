import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import colors from '../utils/colors';
import FunctionalityLeftComponent from '../components/FunctionalityLeftComponent';
import FunctionalityRightComponent from '../components/FunctionalityRightComponent';

const FunctionalitySettingsScreen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        header="FUNCTIONALITIES SETTINGS"
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.childContainer}>
        <View style={styles.child}>
          <FunctionalityLeftComponent />
        </View>
        <View style={styles.child}>
          <FunctionalityRightComponent />
        </View>
      </View>
    </View>
  );
};

export default FunctionalitySettingsScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  child: {
    width: '50%',
    paddingHorizontal: '5%',
  },
});
