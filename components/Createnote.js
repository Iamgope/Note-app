import React,{useState} from 'react';
import { StyleSheet,Text,TextInput, View, Button ,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
export default function Createnote({addNewNote}){
       //console.log(props)
    const [NewNote,SetNewNote]=useState('')
    const AppButton=({onPress,title})=>
    
        (
            <TouchableOpacity onPress={onPress}style={styles.appButtonContainer}>
            <View style={styles.buttontext}>
            <Text style={styles.appButtonText}>{title}</Text>
            </View>
          </TouchableOpacity>
        
          );  
    return <View><TextInput style={styles.input}
    placeholder="write your note!"
    autoCorrect={false}
    autoCapitalize="none"
    multiline={true}
    value={NewNote}
    onChangeText={(curr)=>SetNewNote(curr)}
    />
    <View style={styles.buttonview}>
        <AppButton
        title="Add"
        onPress={()=>{
        addNewNote(NewNote)
        
       {/*const loggedInUserid=firebase.auth().currentUser.uid
       const pathforData=`/users/${loggedInUserid}/`
        firebase.database()
                        .ref(pathforData)
                        .push({
                          'date':new Date().toDateString(),
                          'text':NewNote
                        })*/}
        SetNewNote('')
          }  }
        />
    </View>

    </View>
}
const styles=StyleSheet.create({
    input:{
        borderWidth:4,
         width:320,
         //padding:4,
         alignItems:'center',
         height:100,
         borderColor:'gray',
        borderRadius:1000000,
        textAlign:'center',
        fontSize:20
    },
    appButtonContainer: {
        width:100,
        height:100,
        backgroundColor:'lightblue',
        borderRadius:100
      },
      appButtonText: {
    fontSize:25,
    color:'white',
    fontWeight:'bold',
      },
      buttonview:{
          
          alignItems:"flex-end"
      },
      buttontext:{
   alignItems:"center",
   marginTop:29
      }
});