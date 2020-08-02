import React from 'react';
import { StyleSheet,FlatList,Text, View } from 'react-native';
import Singlenotes from './Singlenotes'
export default function Notes(){
    const Note=[
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"1"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"2"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"3"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"4"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"5"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"6"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"7"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"8"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"9"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"10"},
        {"age":"25","name":"you know who i am  ha ha..iamgope",key:"11"}
    ]
    return <View>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={Note}
        numColumns={2}
        
       renderItem={({item})=>{
     return <Singlenotes Mynotes={item.name}/>
       }
}
/>
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
