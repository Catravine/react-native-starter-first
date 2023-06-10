import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text>Box Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default BoxScreen;