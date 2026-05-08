import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyBg() {
  return (
    <ImageBackground 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}
        imageStyle={{opacity:0.2}}
        source={{uri:"https://parashat.co.il/wp-content/uploads/2023/09/shlomo0355_Beautiful_backgrounds_of_mountains_colorful_water_pa_ed06cbf4-addb-4b02-ab11-b01f2104dd31.png"}}>
        <Text>Hello</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})