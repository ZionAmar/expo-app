import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyAlert() {
  return (
    <SafeAreaView>
      <Text>MyAlert</Text>
      <TouchableOpacity 
      onPress={()=>Alert.alert("hello","hello2",[{text:"אישור",onPress:()=>console.log("OK")},{text:"ביטול"}])}
      style={{paddingTop:30}}>
        <Text>Press here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})