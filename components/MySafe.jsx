import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MySafe({ children }) {
    return (
        <View style={{ flex: 1 ,marginVertical:15}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})