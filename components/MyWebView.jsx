import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function MyWebView() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
        <StatusBar style='light'/>
        <WebView style={{flex:1}} source={{uri:'https://aztodev.com'}}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})