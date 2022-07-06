import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

const UsernameandPassword = () => {
  
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const showData =()=>{
    alert("email: "+email+
          "\npassword: "+pass)
  }

  return (
    <View>
      <TextInput style={styles.TextInput}  
        value={email}
        onChangeText = {(email)=>{setEmail(email)}}
        placeholder='email'/>
      <TextInput style={styles.TextInput}
        value={pass}
        onChangeText = {(pass)=>{setPass(pass)}}
        placeholder='password'/>
    <Button
    title='Submit'
    color='pink'
    onPress={showData}
    />

    </View>
  )
}

export default UsernameandPassword

const styles = StyleSheet.create({
  TextInput :{
    width:250,
    height:35,
    padding:10,
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#e8e8e8'
}

})