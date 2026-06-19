import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyAnim() {
    let myAnim = useRef(new Animated.Value(1)).current;
    let [isVisable, setIsVisable] = useState(true);
    function myFunc() {
        if (isVisable) {
            Animated.timing(myAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start()
            setIsVisable(false)
        } else {
            Animated.timing(myAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }).start()
            setIsVisable(true)
        }
    }
    return (
        <SafeAreaView style={styles.screen}>
            <Animated.Text style={[styles.txt, { opacity: myAnim }]}>MyAnim</Animated.Text>
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
        top: 100,
        fontSize: 30
    },
    btn: {
        padding: 20,
        backgroundColor: "rgb(174, 210, 247)",
        borderRadius: 15
    }
})