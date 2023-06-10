import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {

  return (
    <View style={styles.viewStyle}>
      <View style={styles.view1Style} />
      <View style={styles.view2Style} />
      <View style={styles.view3Style} />
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view1Style: {
    height: 50,
    width: 60,
    borderWidth: 2,
    borderColor: 'red'
  },
  view2Style: {
    height: 50,
    width: 60,
    borderWidth: 2,
    borderColor: 'green',
    alignSelf: 'flex-end'
    /* or: `top: 50` if the parent is taller than 100! */
  },
  view3Style: {
    height: 50,
    width: 60,
    borderWidth: 2,
    borderColor: 'blue',
  }
});

export default BoxScreen;