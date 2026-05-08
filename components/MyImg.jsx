import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MySafe from '../components/MySafe'

export default function MyImg() {
    return (
        <MySafe>
            <Image
                style={{ width: 400, height: 200 }}
                resizeMode='stretch'
                // resizeMode='contain'
                // resizeMode='cover'
                source={require('../assets/images/logo.png')} />
            <Image
                style={{ width: 400, height: 200 }}
                source={{ uri: "https://www.mikmak.co.il/media/gallery/665/665500/main/665500_t649.jpg" }} />
        </MySafe>
    )
}

const styles = StyleSheet.create({})