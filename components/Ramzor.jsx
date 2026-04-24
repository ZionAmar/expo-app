import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Ramzor() {
  return (
    <View style={styles.container}>
      <View style={[styles.box,{backgroundColor:"rgb(241, 79, 79)"}]}/>
      <View style={[styles.box,{backgroundColor:"rgb(251, 248, 88)"}]}/>
      <View style={[styles.box,{backgroundColor:"rgb(91, 251, 115)"}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#456",
    justifyContent:"center",
    alignItems:"center",
    gap:20
  },
  box:{
    width:200,
    height:200,
    borderRadius:100
  }
})