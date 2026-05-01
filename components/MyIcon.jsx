import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MyIcon() {
  return (
    <SafeAreaView>
      <AntDesign name="apple" size={54} color="rgb(100, 168, 235)" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})