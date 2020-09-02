import React,{useState} from 'react';
import {StyleSheet,View,Text,TextInput,Button} from 'react-native';
import firebase from'firebase'
const Loginscreen=()=>{
    const [email,SetEmail]=useState("")
    const [password,SetPassword]=useState("")
return <View >
    <View  style={styles.textview}>
<Text>Email:</Text>
</View>
<TextInput style={styles.logininput}
placeholder="abc@example.com"
autoCapitalize="none"
autoCorrect={false}
value={email}
onChangeText={(currtext)=>SetEmail(currtext)}
/>
<View style={styles.textview}>
<Text>password</Text>
</View>
<TextInput style={styles.logininput}
placeholder="password"
//placeholderTextColor="grey"
autoCapitalize="none"
autoCorrect={false}
secureTextEntry={true}
value={password}
onChangeText={(currvalue)=>SetPassword(currvalue)}
/>
<Button color="coral" title="login"
 onPress={()=>{
     firebase.auth().signInWithEmailAndPassword(email,password)
 }}
/>
<Button title="signup"
onPress={()=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
}}
/>
</View>
}

const styles=StyleSheet.create({
logininput:{
    borderWidth:2,
    width:300,
    borderRadius:100,
    margin:10,
   paddingHorizontal:20,
   fontSize:17

},
textview:{
    alignItems:'center'
}
});

export default Loginscreen;