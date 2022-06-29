import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'

const App = () => {
  return (
    <View>
      <Logo/>
      <Button
        title='Click me'
      />
      <User/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})