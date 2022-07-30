import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable} from "react-native";
import { TextInput } from "react-native";

const Username = ({ navigation }) => {
  const [userName, setUserName] = useState("");

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text style={styles.header}>SignUp</Text>

        <View style={styles.inputcontainer}>
          <Text style={styles.subheading}>Full Name</Text>

          <TextInput
            style={styles.inputstyle}
            placeholder=" Enter Your Full Name like (Ali Zafar)"
            value={userName}
            onChangeText={(actualData) => setUserName(actualData)}
          />
        </View>
        <Pressable
          style={styles.nxtbutton}
          onPress={ 
            () =>
            navigation.navigate("Phone-Number", { userName: userName })
          }
          disabled={!userName}

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
    marginTop: 50,
    width: 300,
    marginLeft: 28,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    color: "#2e8b57",
    fontWeight: "bold",
  },

  inputcontainer: {
    marginTop: 20,
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

export default Username;
