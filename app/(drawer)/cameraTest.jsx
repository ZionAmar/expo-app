import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

export default function cameraTest() {
    let [myImg, setMyImg] = useState(null);
    async function openCamera() {
        let res = await ImagePicker.requestCameraPermissionsAsync();
        if(!res.granted){
            Alert.alert("חייב לתת אישור למצלמה")
            return
        }
        let pic = await ImagePicker.launchCameraAsync();
        setMyImg(pic.assets[0].uri)
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={{ uri: myImg }} style={{ width: 300, height: 300, borderWidth: 1 }} />
            <TouchableOpacity onPress={openCamera} style={styles.btn}>
                <Text>ייבא</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "rgb(94, 172, 249)",
        shadowColor: "black",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 10,
        flexDirection: "row",
        gap: 10,
        marginVertical: 20
    }
})