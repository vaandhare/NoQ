import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import {updateDataSequence, updateSelection} from '../utils/common';

const UpComponent = ({index, onPress}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={{opacity: index > 0 ? 1 : 0}}
    onPress={onPress}>
    <Text style={styles.upText}>Up</Text>
  </TouchableOpacity>
);

const DownComponent = ({index, length, onPress}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={{opacity: index < length - 1 ? 1 : 0}}
    onPress={onPress}>
    <Text style={styles.downText}>Down</Text>
  </TouchableOpacity>
);

const FunctionalitiesItem = ({data, setData, itemData, storeDataToAsync}) => {
  // console.log("itemData", itemData)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          updateSelection(
            data,
            setData,
            itemData.section.title,
            itemData.item.sequenceNumber,
            storeDataToAsync,
          );
        }}>
        <MaterialCommunityIcons
          name={
            itemData.item.isSelected
              ? 'checkbox-intermediate'
              : 'checkbox-blank-outline'
          }
          color={itemData.item.isSelected ? colors.secondary : colors.black}
          size={26}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{itemData.item.title}</Text>

      <UpComponent
        index={itemData.index}
        onPress={() =>
          updateDataSequence(
            data,
            setData,
            itemData.section.title,
            itemData.index,
            'up',
            storeDataToAsync,
          )
        }
      />

      <DownComponent
        index={itemData.index}
        length={itemData.section.data.length}
        onPress={() =>
          updateDataSequence(
            data,
            setData,
            itemData.section.title,
            itemData.index,
            'down',
            storeDataToAsync,
          )
        }
      />
    </View>
  );
};

export default FunctionalitiesItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    paddingStart: 10,
    fontSize: 16,
    color: colors.black,
  },
  upText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: colors.green,
  },
  downText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.secondary,
  },
});
