import React,{useState} from 'react';
import { StyleSheet,FlatList,Text,TextInput, View,Image ,Button} from 'react-native';
import Singlenotes from './Singlenotes'
import Createnote from './Createnote'
import firebase from 'firebase'
export default function Notes(){
  
    const[Note,SetNote]=useState([
        //{name:'aman vaaai',date:"10-12-14"},
        //{name:'aman vaaai',date:"10-12-15"},
        //{name:'aman vaaai',date:"10-12-16"}
    ]);
    const addNewNote=(text)=>
    { if(text.length>0){
     //   SetNote([...Note,{'name':{text},'Date':new Date()}])
     SetNote((prevdata)=>{
         
         return [
            {name:text,date:new Date()}
            ,...prevdata
         ];
     })
    }
    }


    
    return <View style={styles.viewstyle}>
         <Button
   title="logout"
   onPress={()=>{
        firebase.auth().signOut()
   }}
   />
        <Createnote addNewNote={addNewNote}/>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={Note}
        keyExtractor={(item, index) => {
            return index.toString()
        }
    }
        numColumns={2}
        
       renderItem={({item})=>{
     return <Singlenotes Mynotedate={item.date} Mynotesname={item.name}/>
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
    viewstyle:{
     alignItems:'center'
    },
    textview:{
        height:150,
        width:150,
        margin:10,
        borderRadius:10,
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    },
    
       
     // alignContent:'center',
    // alignItems:'center' 
    
    
});
