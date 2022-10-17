import {SectionList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import colors from '../utils/colors';
import FunctionalitiesItem from '../components/FunctionalitiesItem';
import persistStorage from '../storage/persistStorage';

const functionalitySettingsData = require('../utils/functionalitySettingsData/functionalitySettingsData.json');

const FunctionalitySettingsScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAsyncData() {
      const res = JSON.parse(
        await persistStorage.getFunctionalitiesSettingData(),
      );
      console.log('getAsyncData', res);

      if (res) {
        setData(res.data);
        console.log('data changed from if', data);
      } else {
        setData(functionalitySettingsData.data);
        console.log('data changed from else', data);
      }
    }
    getAsyncData();
  }, []);

  const storeDataToAsync = changedData => {
    console.log('data changed to persist', changedData);
    persistStorage.storeFunctionalitiesSettingData(changedData);
  };

  return (
    <View style={styles.container}>
      <Header
        header="FUNCTIONALITIES SETTINGS"
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.child}>
        <SectionList
          sections={data}
          extraData={data}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={item => (
            <Text style={styles.header}>{item.section.title}</Text>
          )}
          renderItem={item => (
            <FunctionalitiesItem
              data={data}
              setData={setData}
              itemData={item}
              storeDataToAsync={storeDataToAsync}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FunctionalitySettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
