import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyView2({children}) {
  return (
    <View style={styles.container}>
        <View accessibilityLabel ="כרטיסיית פרופיל" accessible={true} style={styles.card}>
            <View/>
            {children}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    card:{
        width:"85%",
        // height:500,
        borderRadius:15,
        backgroundColor:"rgb(195, 223, 251)",
        shadowColor:"black",
        shadowOffset:{width:2,height:4},
        shadowOpacity:0.6,
        shadowRadius:10,
        elevation:10,
        alignItems:"center",
        padding:20
    }
})