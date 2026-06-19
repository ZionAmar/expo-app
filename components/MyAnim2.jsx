import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyAnim2() {
    let myAnim = useRef(new Animated.Value(0)).current;
    function myFunc() {
        Animated.sequence([
            Animated.timing(myAnim,{
                toValue:200,
                duration:500,
                useNativeDriver:true
            }),
            Animated.delay(1000),
            Animated.timing(myAnim,{
                toValue:0,
                duration:500,
                useNativeDriver:true
            })
        ]).start();
    }
    return (
        <SafeAreaView style={styles.screen}>
            <Animated.Text style={[styles.txt, { transform: [{ translateY: myAnim }] }]}>התחברת בהצלחה</Animated.Text>
            <TouchableOpacity onPress={myFunc} style={styles.btn}>
                <Text>לחץ כאן</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        position: "absolute",
        top: -100,
        fontSize: 30
    },
    btn: {
        padding: 20,
        backgroundColor: "rgb(174, 210, 247)",
        borderRadius: 15
    }
})