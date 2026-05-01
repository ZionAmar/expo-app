import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MySafe() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View>
                <Text>MySafe</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})