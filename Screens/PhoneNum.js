import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';


const PhoneNum = ({ navigation, route }) => {
  const userName = route.params.userName;
    const [Phone, setPhone] = React.useState('');
    const phoneInput = React.useRef(null);
   

    const OnPress = () => {
      navigation.navigate("Password", {
        username: userName,
        phone: Phone,
      })

        if (Phone.length !==0) {
            Alert.alert(
                "Confirm Number",
                Phone,
                [
                    

                    { 
                        text: "OK", 
                        onPress: () => console.log("OK Pressed"),
                    }
                ],
            );
        }
       
    }

    return (
      
        <View style={styles.container}>
          <Text style={styles.subheading}>Phone Number</Text>
            <PhoneInput
                ref={phoneInput}
                defaultValue={Phone}
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                onChangeFormattedText={text => {
                    setPhone(text);
                }}
                defaultCode="PK"
                layout='first'
                withShadow
                autoFocus
            />
            <Pressable
                style={styles.button}
                onPress={() => OnPress()}
                android_ripple="red"
                disabled={!Phone}
            >
                <Text style={styles.text}>Next Screen</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subheading: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#7d7d7d",
      marginTop: 63,
      marginLeft: -173,
      marginBottom: 5,
      lineHeight: 25,
    },
  
    phoneContainer: {
      marginTop: 25,
        width: '86%',
        height: 50,
    },
    button: {
      marginTop: 30,
     
      backgroundColor: "#ff4500",
      width: 130,
      padding: 16,
      borderRadius: 50,
      alignItems: "center",
    },
    textInput: {
        paddingVertical: 0,
    },
    text: {
      color: "#fff",
    },
});

export default PhoneNum;


