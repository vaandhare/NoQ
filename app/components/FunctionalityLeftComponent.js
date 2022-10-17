import {SectionList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import persistStorage from '../storage/persistStorage';
import colors from '../utils/colors';
import FunctionalitiesItem2 from './FunctionalityItem2';

const functionalitySettingsLeftData = require('../utils/functionalitySettingsData/functionalitySettingsLeftData.json');

const FunctionalityLeftComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAsyncData();
  }, []);

  const getAsyncData = async () => {
    const res = JSON.parse(
      await persistStorage.getFunctionalitiesLeftSettingData(),
    );
    console.log('getAsyncData', res);

    if (res) {
      setData(res.data);
    } else {
      setData(functionalitySettingsLeftData.data);
    }
  };

  const storeDataToAsync = changedData => {
    console.log('data changed to persist', changedData);
    persistStorage.storeFunctionalitiesLeftSettingData(changedData);
  };

  return (
    <SectionList
      sections={data}
      extraData={data}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={item => (
        <Text style={styles.header}>{item.section.title}</Text>
      )}
      renderItem={item => (
        <FunctionalitiesItem2
          itemData={item}
          data={data}
          setData={setData}
          storeDataToAsync={storeDataToAsync}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FunctionalityLeftComponent;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
