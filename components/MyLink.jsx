import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function MyLink() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity 
        // onPress={()=>Linking.openURL('https://google.com')}>
        // onPress={()=>Linking.openURL('tel:0512345678')}>
        onPress={()=>Linking.openURL('mailto:zion@gmail.com')}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})