import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './app/Routes';


const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1
  }
});

export default App;
