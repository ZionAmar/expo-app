import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyScroll() {
    let arr = [];
    for (let i = 0; i < 50; i++) {
        arr.push({id:i})
    }
    return (
        <SafeAreaView>
            <ScrollView>
                {arr.map(item=><Text key={item.id} style={{padding:20}}>{item.id}</Text>)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})