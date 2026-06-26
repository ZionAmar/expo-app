import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFound() {
    let router = useRouter();
  return (
    <SafeAreaView>
      <Text> NotFound</Text>
      <TouchableOpacity onPress={()=>router.back()}>
        <Text>
            חזור
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})