
import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./Screens/Account";
import Username from "./Screens/Username";
import PhoneNum from "./Screens/PhoneNum";
import Password from "./Screens/Password";
import Welcome from "./Screens/Welcome";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Full-name"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Account-Creation" component={Account} />
        <Stack.Screen name="Full-name" component={Username} />
        <Stack.Screen name="Phone-Number" component={PhoneNum} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",

    textAlign: "center",
  },
});

export default App;
