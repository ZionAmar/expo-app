import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyAnim4() {
    let myAnim = useRef(new Animated.Value(0)).current;
    let myAnimstr = myAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["-50deg", '50deg']
    })

    useEffect(() => {
        let loop = Animated.loop(
            Animated.sequence([
                Animated.timing(myAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(myAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                })
            ])
        )
        loop.start();
        return ()=>loop.stop();
    }, [])


    return (
        <SafeAreaView style={styles.screen}>
            <Animated.Text style={[styles.txt, { transform: [{ rotate: myAnimstr }] }]}>🖐️</Animated.Text>
            {/* <TouchableOpacity onPress={myFunc} style={styles.btn}>
                <Text>לחץ כאן</Text>
            </TouchableOpacity> */}
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
        top: 300,
        fontSize: 30
    },
    btn: {
        padding: 20,
        backgroundColor: "rgb(174, 210, 247)",
        borderRadius: 15
    }
})