import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'

export default function MyAnim5() {
    let myAnim = useRef(null);
    function myFunc(){
        myAnim.current.pause();
    }
    return (
        <SafeAreaView style={styles.screen}>
            <LottieView 
            ref={myAnim}
            autoPlay
            loop={true}
            style={{width:200,height:200}}
            source={require('../assets/animations/Juggling_ball.json')}/>
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
        top: 300,
        fontSize: 30
    },
    btn: {
        padding: 20,
        backgroundColor: "rgb(174, 210, 247)",
        borderRadius: 15
    }
})