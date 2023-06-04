import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  // can potentially add a 'key' property to these objects satisfy the requirements; 
  // so long as each key is a unique, and consistant-across-renders string. 
  // keyExtractor however is a more flexible approach, separates concerns as well.
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 25 },
    { name: 'Friend #3', age: 30 },
    { name: 'Friend #4', age: 35 },
    { name: 'Friend #5', age: 40 },
    { name: 'Friend #6', age: 45 },
    { name: 'Friend #7', age: 50 },
    { name: 'Friend #8', age: 55 },
    { name: 'Friend #9', age: 60 }
  ];
  return (
    <FlatList 
      data={friends} 
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name } // just use the name (so long as its unique)
      renderItem={({ item }) => {
        // element === { item: { name: 'Friend #1' }, index: 0 }
        // destructuring item: { name: 'Friend #1' }
        return (
          <Text style={styles.textStyle}>
            {item.name} (age: {item.age})
          </Text>
        )
      }} 
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    // marginVertical: 50,
    fontSize: 30
  },
  ageSpan: {
    marginLeft: '20px',
    fontSize: 20
  }
});

export default ListScreen;