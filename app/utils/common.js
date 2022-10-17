export const updateDataSequence = (
  data,
  setData,
  title,
  itemIndex,
  operation,
  storeDataToAsync,
) => {
  const index = data.findIndex(p => p.title == title);

  const item = data[index];
  // console.log('item before', item)

  if (operation === 'up') {
    [item.data[itemIndex], item.data[itemIndex - 1]] = [
      item.data[itemIndex - 1],
      item.data[itemIndex],
    ];
  } else {
    [item.data[itemIndex], item.data[itemIndex + 1]] = [
      item.data[itemIndex + 1],
      item.data[itemIndex],
    ];
  }

  // console.log('item after', item)

  data[index] = item;

  setData([...data]);
  storeDataToAsync([...data]);
};

export const updateSelection = (
  data,
  setData,
  title,
  sequenceNumber,
  storeDataToAsync,
) => {
  const index = data.findIndex(p => p.title == title);
  const item = data[index];

  const child = item.data.findIndex(p => p.sequenceNumber == sequenceNumber);

  item.data[child].isSelected = !item.data[child].isSelected;

  data[index] = item;
  // console.log(item);
  setData([...data]);
  storeDataToAsync([...data]);
};
