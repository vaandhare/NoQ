import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import PinButton from './PinButton';
import PinRow from './PinRow';

const PinComponent = () => {
  const [pin, setPin] = useState('');

  // console.log(pin)

  const onAddNumber = number => {
    setPin(prev => prev + number);
  };

  return (
    <View style={styles.container}>
      <PinRow pin={pin} />

      <View style={styles.row}>
        <View style={styles.button}>
          <PinButton number={1} onAddNumber={() => onAddNumber('1')} />
        </View>
        <View style={styles.button}>
          <PinButton number={2} onAddNumber={() => onAddNumber('2')} />
        </View>
        <View style={styles.button}>
          <PinButton number={3} onAddNumber={() => onAddNumber('3')} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.button}>
          <PinButton number={4} onAddNumber={() => onAddNumber('4')} />
        </View>
        <View style={styles.button}>
          <PinButton number={5} onAddNumber={() => onAddNumber('5')} />
        </View>
        <View style={styles.button}>
          <PinButton number={6} onAddNumber={() => onAddNumber('6')} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.button}>
          <PinButton number={7} onAddNumber={() => onAddNumber('7')} />
        </View>
        <View style={styles.button}>
          <PinButton number={8} onAddNumber={() => onAddNumber('8')} />
        </View>
        <View style={styles.button}>
          <PinButton number={9} onAddNumber={() => onAddNumber('9')} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.button} />
        <View style={styles.button}>
          <PinButton number={0} onAddNumber={() => onAddNumber('0')} />
        </View>
        <View style={styles.button} />
      </View>
    </View>
  );
};

export default PinComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  pinInput: {
    justifyContent: 'center',
  },
});
