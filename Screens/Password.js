import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native";

const Password = ({ navigation, route }) => {
  const [Password, setPassword] = useState("");
  const payloadInPassword = {
    phone: route.params.phone,
    username: route.params.username,
    password: Password,
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>

        <View style={styles.inputcontainer}>
          <Text style={styles.subheading}>Password</Text>

          <TextInput
            style={styles.inputstyle}
            placeholder=" Enter Your Password like (qWeras34)"
            secureTextEntry={true}
            value={Password}
            onChangeText={(actualData) => setPassword(actualData)}
          />
        </View>
        <Pressable
          style={styles.nxtbutton}
          onPress={() =>
            navigation.navigate("Account-Creation", { payloadInPassword })
          }
        >
          <Text style={styles.buttonText}>Next Screen</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,

    backgroundColor: "#fff",
    textAlign: "center",
  },
  container: {
    flex: 1,
    marginTop: 80,
    width: 300,
    marginLeft: 28,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  inputcontainer: {
    marginTop: 35,
  },

  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },

  inputstyle: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: "rgba(0,0,0,0.3)",
  },
  nxtbutton: {
    marginTop: 30,
    marginLeft: 89,
    backgroundColor: "#ff4500",
    width: 130,
    padding: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});

export default Password;