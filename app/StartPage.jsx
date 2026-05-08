import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MySafe from '../components/MySafe'
import MyView2 from '../components/MyView2'
import MyBtn from '../components/MyBtn'
import Octicons from '@expo/vector-icons/Octicons';

export default function StartPage() {
  return (
    <MySafe>
        <MyView2>
            <Text style={styles.txt1}>My yoman</Text>
            <Text style={styles.txt2}>
                באפליקציה זו ניצור דפים בריאקט נייטיב
                <Text style={{fontWeight:"bold"}}> בעיקר בשביל להדגים </Text>
                פיתוח אפליקציות
            </Text>
            <MyBtn>
                <Octicons name="move-to-start" size={24} color="black" />
            </MyBtn>
        </MyView2>
    </MySafe>
  )
}

const styles = StyleSheet.create({
    txt1:{
        fontSize:45,
        borderLeftWidth:5,
        fontWeight:"bold",
        textShadowColor:"#456",
        textShadowOffset:{width:2,height:2},
        textShadowRadius:8,
        margin:20
    },
    txt2:{
        textAlign:"right",
        fontSize:20,
        margin:15
    }
})