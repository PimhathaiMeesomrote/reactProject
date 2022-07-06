import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'

const App = () => {
  return (
    <View style={{ flex:1,justifyContent: "center", alignItems: "center"}} >
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LotsOfGreetings/> */}
      <MyCustomTextWith/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})