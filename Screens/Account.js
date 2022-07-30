import { View, Text, Alert } from "react-native";
import React from "react";
import axios from "axios";
import { StyleSheet, TouchableOpacity } from "react-native";

const Account = ({ navigation, route }) => {
  const payload = route.params.payloadInPassword;

  console.log(payload)

  const callApi= () => {
    navigation.navigate("Welcome", { payload})

      axios.post('http://localhost:3011/v1/auth/register', 
      {
        fullName:payload.username,
        password:payload.password,
        phone: payload.phone,
        role: [
          "guest"
        ],
        status: "isActive"
    }
    )
    .then(result => {
      console.log(result.data);
    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.description}>
        "The journey of a thousand miles begins with a single step."
      </Text>

      <TouchableOpacity style={styles.button} onPress={callApi}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    marginTop: 90,
    marginLeft: 10,
    maxHeight: 170,
    width: 330,

    textAlign: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  description: {
    marginTop: 50,
    fontStyle: "italic",
    fontSize: 20,
    textAlign: "center",
    color: "#000000`",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    lineHeight: 35,
  },
  button: {
    marginTop: 30,
    marginLeft: 100,
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

export default Account;
