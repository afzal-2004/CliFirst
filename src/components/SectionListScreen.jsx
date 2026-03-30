import { SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SectionListScreen = () => {
  const Dummydata = [
    {
      Category: 'Fruits',
      data: [
        {
          id: '1',
          name: 'Apple',
        },
        {
          id: '2',
          name: 'Orange',
        },
        {
          id: '3',
          name: 'PineApple',
        },
      ],
    },
    {
      Category: 'Vegitables',
      data: [
        {
          id: '4',
          name: 'Potato',
        },
        {
          id: '5',
          name: 'Tomato',
        },
        {
          id: '6',
          name: 'LadyFingure',
        },
      ],
    },
  ];

  const renderItems = ({ item }) => (
    <View>
      <Text style={styles.ItemsStyling}>{item.name}</Text>
    </View>
  );

  const renderSection = ({ section }) => (
    <View>
      <Text>{section?.Category}</Text>
    </View>
  );
  return (
    <View>
      <SectionList
        sections={Dummydata}
        renderItem={renderItems}
        keyExtractor={item => item.id}
        renderSectionHeader={renderSection}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  ItemsStyling: {
    fontSize: 15,
    // fontWeight: 500,
    backgroundColor: '#60aa66',
    padding: 2,
    margin: 3,
    borderColor: '#2E7D32',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    // color: 'white',
    height: 40,
    display: 'flex',
    // textAlign: 'center',roid
    
  },
});
