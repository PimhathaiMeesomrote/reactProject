import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'

const App = () => {
  return (
    <View>
      <Logo/>
      <User/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})