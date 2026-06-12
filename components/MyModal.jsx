import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyModal() {
    let [isVisable,setIsVisable] = useState(true);
  return (
    <SafeAreaView>
      <Text>MyModal</Text>
      <Modal
        transparent={true}
        animationType='slide'
        onRequestClose={()=>setIsVisable(false)}
        visible={isVisable}>
            <View style={styles.screen}>
                <View style={styles.container}>

                </View>
            </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"rgba(195, 225, 255, 0.56)"
    },
    container:{
        width:300,
        height:300,
        backgroundColor:"white"
    }
})