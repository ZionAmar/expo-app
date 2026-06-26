import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function _layout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name='start' options={{title:"התחל"  ,tabBarIcon:({color,size})=>(<Entypo name="controller-jump-to-start" size={size} color={color} />)}}/>
      <Tabs.Screen name='store' options={{title:"חנות"  ,tabBarIcon:({color,size})=>(<FontAwesome5 name="store" size={size} color={color} />)}}/>
      <Tabs.Screen name='todo'  options={{title:"משימות",tabBarIcon:({color,size})=>(<FontAwesome5 name="tasks" size={size} color={color} />)}}/>
    </Tabs>
  )
}

const styles = StyleSheet.create({})