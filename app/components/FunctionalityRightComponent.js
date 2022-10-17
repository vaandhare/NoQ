import {SectionList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import persistStorage from '../storage/persistStorage';
import colors from '../utils/colors';
import FunctionalitiesItem2 from './FunctionalityItem2';

const functionalitySettingsRightData = require('../utils/functionalitySettingsData/functionalitySettingsRightData.json');

const FunctionalityRightComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAsyncData();
  }, []);

  const getAsyncData = async () => {
    const res = JSON.parse(
      await persistStorage.getFunctionalitiesRightSettingData(),
    );
    console.log('getAsyncData', res);

    if (res) {
      setData(res.data);
    } else {
      setData(functionalitySettingsRightData.data);
    }
  };

  const storeDataToAsync = changedData => {
    console.log('data changed to persist', changedData);
    persistStorage.storeFunctionalitiesRightSettingData(changedData);
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

export default FunctionalityRightComponent;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
