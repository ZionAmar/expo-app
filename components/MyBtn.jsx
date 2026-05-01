import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyStatus from './MyStatus'

export default function MyBtn() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      {/* <Button title='Hello' color={'red'} onPress={()=>console.log("Hello")
      }/> */}
      <MyStatus/>
      <TouchableOpacity 
        disabled={true}
        // onPressIn={}
        // onPressOut={}
        onPress={()=>console.log("hello2")}
        onLongPress={()=>console.log("hello3")}
        activeOpacity={0.6} 
        style={{borderWidth:1,padding:20}}>
        <Text>Hello2</Text>
      </TouchableOpacity>
      {/* <Pressable style={({pressed})=>pressed?{backgroundColor:"red",opacity:0.3}:{backgroundColor:"green"}}>
        <Text>Hello4</Text>
      </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({})