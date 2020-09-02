import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

const Singlenotes=(props)=>
{   
    return <View backgroundColor={Randomcolor()} style={styles.textview}>
        <Text>{props.Mynotedate.toDateString()}</Text>
      <Text style={styles.text}>{props.Mynotesname}</Text>
    </View>
}

const Randomcolor=()=>{
    var red=Math.floor(Math.random()*255)
    var green=Math.floor(Math.random()*255)
    var blue=Math.floor(Math.random()*255)
    
    return `rgb(${red},${green},${blue})`
}

const styles=StyleSheet.create({
    text:{
    
        paddingHorizontal:12,
        fontSize:20,
    },
    textview:{
        height:150,
        width:150,
        margin:10,
        borderRadius:10,
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    }
    
});
export default Singlenotes;