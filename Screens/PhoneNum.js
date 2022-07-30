
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Keyboard, Alert } from "react-native";

// import PhoneInput from 'react-native-phone-input'
import { TextInput } from "react-native";

const PhoneNum = ({ navigation, route }) => {
  const userName = route.params.userName;
  const [Phone, setPhone] = React.useState('');





  const onChanged = (text) => {
    let newText = '';
    let Phones = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(Phones.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            alert("please enter numbers only *03111111111*");
        }
    }
    setPhone(newText);
}
 const onPress = () => {
        if (Phone.length !== 0) {
            Alert.alert(
                "Confirm Phone",
                Phone,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                    },

                    { 
                        text: "OK", 
                        onPress: () => console.log("OK Pressed"),
                    },
                ],
            );
            setPhone('');
            Keyboard.dismiss();
        }
    
    
    
        navigation.navigate("Password", {
          username: userName,
          phone: Phone,
        })
      }


  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        

        <View style={styles.inputcontainer}>
          <Text style={styles.subheading}>Phone Number</Text>
          
          
           <TextInput  style={styles.inputstyle}
       keyboardType='numeric'
       onChangeText={text => onChanged(text)}
       value={Phone}
      
       placeholder='Enter Your Contact Number (03111111111)'
       maxLength={11}
  
          />
          
      {/* <TextInput  style={styles.inputstyle}
        pattern="[0-9]*"
        
        maxLength={11}
            value={Phone}
            placeholder=" Enter Your Phone Number (03111111111)"
            onChange={(e) =>
              setPhone((v) => (e.target.validity.valid ? e.target.value : Phone))
            }
  
          /> */}
          

          {/* <TextInput
        
            style={styles.inputstyle}
  
            placeholder=" Enter Your Phone Number (03111111111)"
            maxLength={11}
            value={Phone}
            onChangeText={(actualData) => setPhone(actualData)}
          /> */}
          
        </View>
         <Pressable
          style={styles.nxtbutton}
          onPress={() => onPress()}
          disabled={!Phone}
        >
          <Text style={styles.buttonText}>Next Screen</Text>
        </Pressable>
        {/* <Pressable
          style={styles.nxtbutton}
          onPress={ () =>
            navigation.navigate("Password", {
              username: userName,
              phone: Phone,
            })
          }
          disabled={!Phone}
        >
          <Text style={styles.buttonText}>Next Screen</Text>
        </Pressable> */}
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

export default PhoneNum;
