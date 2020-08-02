import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header=()=>{
return <View style={styles.header}>
</View>
}

const styles=StyleSheet.create(
   {
      header:{
        
        backgroundColor:'paleturquoise',
        height:9,
        padding:20,
        
      },
      title:{
        marginTop:10,
        textAlign: 'center',
        color: 'navy',
        fontSize: 30,
        fontWeight: 'bold',
      }
    }
);
export default Header;