import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyGrid() {
    let arr = [];
    for(let i=0;i<30;i++){
        arr.push(<View style={[styles.box,i%2==0&&{backgroundColor:"black"}]}/>)
    }
    return (
        <View style={styles.container}>
            {arr}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap"
    },
    box:{
        width:"33%",
        height:150,
        borderWidth:1
    }
})