import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

export default function MyStatus() {
    let [isLight, setIsLight] = useState(true);
    return (
        <View>
            <StatusBar hidden={true} style={isLight?'dark':'light'} />
            <Text>MyStatus</Text>
        </View>
    )
}

const styles = StyleSheet.create({})