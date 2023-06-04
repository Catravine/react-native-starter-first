import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => { 
  // destructured props.navigation (bestowed by Stack Navigator in App.js)
  return (
    <View>
      <Text style={styles.text}>Caroline's Funtimes App!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => navigation.navigate("Components")}
      />
      <Button 
        title="Go to List Demo" 
        onPress={() => navigation.navigate("List")} 
      />
      <Button 
        title="Go to Image Demo" 
        onPress={() => navigation.navigate("Image")} 
      />
      <Button 
        title="Go to Counter Demo" 
        onPress={() => navigation.navigate("Counter")} 
      />
      <Button 
        title="Go to Color Demo" 
        onPress={() => navigation.navigate("Color")} 
      />
      {/* more flexibility than the simple Button; can make anything tappable */}
      <TouchableOpacity onPress={() => console.log('catch me in the terminal, fool!')}>
        <Text>Console Log in the Terminal!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
