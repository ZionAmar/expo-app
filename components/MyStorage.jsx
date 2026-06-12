import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyStorage() {
    let [myVal,setMyVal] = useState("");
    let [myData,setMyData] = useState("");
    async function save(val) {
        let st = JSON.stringify(val);
        await AsyncStorage.setItem('myVal2',st);
        console.log("saved");
    }
    async function load() {
        let st = await AsyncStorage.getItem('myVal2');
        let val = JSON.parse(st);
        setMyData(val);
    }
  return (
    <SafeAreaView>
      <Text>MyStorage</Text>
      <TextInput 
      value={myVal}
      onChangeText={setMyVal}
      style={{borderWidth:1}}/>
      <TouchableOpacity
      onPress={()=>save(myVal)}
       style={{paddingVertical:30}}>
        <Text>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={load}
       style={{paddingVertical:30}}>
        <Text>Load</Text>
      </TouchableOpacity>
      <Text style={{color:"red"}}>{myData}</Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})