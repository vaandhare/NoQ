import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import PinComponent from '../components/PinComponent';
import Actions from '../components/Actions';
import Notifications from '../components/Notifications';
import FooterText from '../components/FooterText';
import persistStorage from '../storage/persistStorage';
import {isTablet} from 'react-native-device-info';
import colors from '../utils/colors';

const PinScreen = ({navigation, route}) => {
  // console.log('params', route.params)

  return (
    <View style={styles.container}>
      <Header
        header="Name of the Outlet"
        isLogout={true}
        onLogoutPress={() => {
          persistStorage.storeUserDetails(null),
            route.params.setUserStatus(false);
        }}
      />

      {isTablet() ? (
        <View style={styles.tabletContainer}>
          <View style={styles.leftContainer}>
            <Notifications />
            <Actions navigation={navigation} />
            <FooterText />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.personalPinText}>Insert Personal PIN</Text>
            <PinComponent />
          </View>
        </View>
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View>
            <PinComponent />

            <Actions navigation={navigation} />

            <Notifications />

            <FooterText />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabletContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    height: '85%',
  },
  leftContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  rightContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: '10%',
  },
  notificationContainer: {
    marginTop: 30,
  },
  personalPinText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
});
