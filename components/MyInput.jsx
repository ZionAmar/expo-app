import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyInput() {
    let input2 = useRef(null);
    let [myVal, setMyVal] = useState('')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback
                onPress={()=>Keyboard.dismiss()}>
                <KeyboardAvoidingView
                    style={styles.screen}
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                    <Text>MyInput</Text>
                    <TextInput
                    // returnKeyType='search'
                        placeholder='your name...'
                        // keyboardType='numeric'
                        // secureTextEntry={true}
                        //   editable={false}
                        onSubmitEditing={()=>input2.current.focus()}
                        value={myVal}
                        onChangeText={setMyVal}
                        style={styles.input} />
                    <TextInput
                        ref={input2}
                    // returnKeyType='search'
                        placeholder='your name...'
                        // keyboardType='numeric'
                        // secureTextEntry={true}
                        //   editable={false}
                        onSubmitEditing={()=>console.log("hello")
                        }
                        value={myVal}
                        onChangeText={setMyVal}
                        style={styles.input} />
                    <TextInput
                        multiline={true}
                        style={styles.input} />
                        

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        borderWidth: 1
    },
    screen: {
        flex: 1,
        justifyContent: "center"
    }
})