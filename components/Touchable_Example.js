import { StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React from 'react'

const Touchable_Example = () => {
    
    const onPress = (msg) => {
        alert('Alert for: ' +msg);
    };

  return (
    <View>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <TouchableNativeFeedback
                style={styles.button}
                onPress={()=>onPress('TouchableNativeFeddback pressed')}
            >
                <View style={styles.button}>
                <Text>Touchable Native Feedback(Only Android)</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableHighlight
                style={styles.button}
                onPress={()=>onPress('TouchableHightlight pressed')}
            >
                <Text>Touchable Hightlight</Text>
            </TouchableHighlight>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>onPress('TouchableOpacity pressed')}
            >
                <Text>Touchable Opacity</Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback
                style={styles.button}
                 onPress={()=>onPress('TouchableWithoutFeedback pressed')}
            >
                <View style={styles.button}>
                    <Text>Touchable Without Feedback</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Touchable_Example

const styles = StyleSheet.create({
     container: {
     flex: 1,
     alignItems: 'center',
     marginTop: 50,
     },
     button: {
     alignItems: 'center',
     backgroundColor: '#DDDDDD', //color of button 
     padding: 10,
     width: 300,
     marginTop: 16,
     },
     });