import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MySafe({ children }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})