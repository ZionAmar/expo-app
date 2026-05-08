import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyStatus from './MyStatus'

export default function MyBtn({children}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Button title='Hello' color={'red'} onPress={()=>console.log("Hello")
      }/> */}
      <MyStatus />
      <TouchableOpacity
        // disabled={true}
        // onPressIn={}
        // onPressOut={}
        onPress={() => console.log("Start")}
        onLongPress={() => console.log("hello3")}
        activeOpacity={0.6}
        style={styles.btn}>
          {children}
        <Text>התחל</Text>
      </TouchableOpacity>
      {/* <Pressable style={({pressed})=>pressed?{backgroundColor:"red",opacity:0.3}:{backgroundColor:"green"}}>
        <Text>Hello4</Text>
      </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgb(94, 172, 249)",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
    flexDirection:"row",
    gap:10
  }
})