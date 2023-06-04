import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize='none' // stops iOS from messing with this
        autoCorrect={false} // stops iOS from messing with this
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;