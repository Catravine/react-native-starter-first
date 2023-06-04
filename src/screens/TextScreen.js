import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const MIN_LENGTH = 5;

const TextScreen = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize='none' // stops iOS from messing with this
        autoCorrect={false} // stops iOS from messing with this
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length < MIN_LENGTH ? (<Text>Password must be at least {MIN_LENGTH} characters</Text>) : null}
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