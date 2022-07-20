import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

const Separator = () =>(
    <View style={styles.separator} />
)

const ButtonExample = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}>
        The title and onPress handler are required.
        It is recommend to set accesibilityLabel to 
        help make your app usable by everyone.
      </Text>
      <Button
        title='Press me'
        onPress={() => alert('Button pressed')}
      />
    </View>
    <Separator/>
    <View style={styles.container}>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each
        platfrom. On iOS, the color prop controls the color of the text.
        On Andriod, the color adjusts the background color of the button.
      </Text>
      <Button
        title='Press me'
        color={'pink'}
        onPress={() => alert('Button with adjust color pressed')}
      />
    </View>
    <Separator/>
    <View style={styles.container}>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each
       
      </Text>
      <Button
        title='Press me'
        disabled
      />
    </View>
    <Separator/>
    <View style={styles.container}>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each
        Adjust the color in a way that looks standard on
      </Text>
      <View style={styles.fixToText}>
      <Button 
        title='Left Button'
        onPress={() => alert('Left button pressed')}
      />
      <Button
        title='Right Button'
        onPress={() => alert('Right button pressed')}
      />
      </View>
    </View>
    </SafeAreaView>
    
  )
}

export default ButtonExample

const styles = StyleSheet.create({
     container: {
     flex: 1,
     justifyContent: 'center',
     marginHorizontal: 16,
     },
     title: {
     textAlign: 'center',
     marginVertical: 8,
     },
     fixToText: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     },
     separator: {
     marginVertical: 8,
     borderBottomColor: '#737373',
     borderBottomWidth: StyleSheet.hairlineWidth,
     },
     });