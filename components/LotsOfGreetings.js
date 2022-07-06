import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name,date}) =>{
    return(
        <View style={{alignItems:'center'}}>
            <Text>Hello {name} {date}</Text>
        </View>
    )
};

const LotsOfGreetings = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
        <Greeting name="Merry Christmas" date="25/12/2022" />
        <Greeting name="Happy New Year" date="01/01/2022" />
        <Greeting name="Songkarn Festival" date="13/04/2022"/>
    </View>
  )
}

export default LotsOfGreetings