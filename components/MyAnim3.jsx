import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyAnim3() {
    let myAnim = useRef(new Animated.Value(1)).current;
    function myFuncIn() {
        Animated.spring(myAnim, {
            toValue: 0.3,
            useNativeDriver: true
        }).start()
    }
    function myFuncOut() {
        Animated.spring(myAnim, {
            toValue: 1,
            friction:0.2,
            useNativeDriver: true
        }).start()
    }
    return (
        <SafeAreaView style={styles.screen}>
            <Animated.Text style={[styles.txt, { transform: [{ scale: myAnim }] }]}>MyAnim3</Animated.Text>
            <TouchableOpacity onPressIn={myFuncIn} onPressOut={myFuncOut} style={styles.btn}>
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
        top: 100,
        fontSize: 30
    },
    btn: {
        padding: 20,
        backgroundColor: "rgb(174, 210, 247)",
        borderRadius: 15
    }
})