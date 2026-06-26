import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer screenOptions={{drawerPosition:"right"}}>
      <Drawer.Screen name='(tabs)' options={{title:"היומן שלי",drawerLabel:"בית"}}/>
      <Drawer.Screen name='about' options={{title:"אודות"}}/>
    </Drawer>
  )
}

const styles = StyleSheet.create({})