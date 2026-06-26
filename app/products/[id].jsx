import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function Id() {
    let {id,name} = useLocalSearchParams();
    let router = useRouter()
  return (
    <View>
      <Text style={{fontSize:30}}>{id}</Text>
      <Text style={{fontSize:30}}>{name}</Text>
      <TouchableOpacity onPress={()=>router.back()}>
        <Text>חזור</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})