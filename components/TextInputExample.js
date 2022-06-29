import { View, TextInput, Button} from 'react-native'
import React from 'react'

const TextInputExample = () => {
  return (
    <View style={{padding:10}}>
        <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
                }}>
            <TextInput 
            placeholder='Course Goal'
            style={{width:'80%',borderColor:'black',borderWidth:1,padding:10}}
            />
            <Button title='ADD' />
        </View>
    </View>
  )
}

export default TextInputExample