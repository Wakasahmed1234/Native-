import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Welcome= ({ route }) => {
  const welcoom= route.params.payload;
   console.log(welcoom);
  
  return (
    <View style={styles.maincontainer}>
    
        <Text style={styles.header}>``Welcome``</Text>
        <Text style={styles.subheader}>{welcoom.username}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
    textAlign: "center",
    color: "#2e8b57",
    fontStyle: "italic",
    fontWeight: "bold",
    
  },
  subheader: {
    marginTop: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    fontSize: 25,
    textAlign: "center",
    color: "#ff4500",
    fontStyle: "italic",

    fontWeight: "bold",
  },
 
});

export default Welcome;