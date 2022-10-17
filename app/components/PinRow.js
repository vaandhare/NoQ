import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {isTablet} from 'react-native-device-info';

const PinRow = ({pin}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.inputContainer}
          editable={false}
          value={pin[0]}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.inputContainer}
          editable={false}
          value={pin[1]}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.inputContainer}
          editable={false}
          value={pin[2]}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.inputContainer}
          editable={false}
          value={pin[3]}
        />
      </View>
    </View>
  );
};

export default PinRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 60,
    marginTop: 30,
    marginBottom: isTablet() ? 20 : 10,
  },
  item: {
    flex: 1,
    borderColor: colors.primary,
    borderBottomColor: colors.white,
    borderWidth: 2,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    fontSize: isTablet() ? 40 : 22,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});
