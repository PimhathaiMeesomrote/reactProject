import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import { Alert } from 'react-native'

const AlertComponent = () => {
  
  const simpleAlertHanler = () =>{
    alert('Hello I am Simple Alert from JavaScrpit')
  }
  const twoOptionAlertHanler = ()=>{
   //use Alert from React native
    Alert.alert(
        //title
        'Hello',
        //body
        'I am two option alert from React native'
        [
            {
                Text:'Yes',
                onPress: ()=> alert('Yes pressed')
            },
            {
                Text:'Yes',
                onPress: ()=> alert('No pressed'),
                style:'cancel'
            }
        ],
        //clicking outside of alert will not cancel
        {cancelable: false}
    )
  }
    return (
    <Button
        title='Simple Alert'
        onPress={simpleAlertHanler}
    />,
    <Button
        title='Alert with two more option'
        onPress={twoOptionAlertHanler}
    />
  )
}

export default AlertComponent

const styles = StyleSheet.create({
  container :{
      flex: 1,alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#ecf0f1"   
  }
})