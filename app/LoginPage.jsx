import { Alert, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import MyBg from '../components/MyBg'
import { useRef, useState } from 'react'

export default function LoginPage() {
    let [isVisable, setIsVisable] = useState(true);
    let [myUname, setMyUname] = useState("");
    let [myPass, setMyPass] = useState("");
    let passRef = useRef(null);
    function checkUser() {
        let uname = "zion";
        let pass = "1234";
        if (uname == myUname && pass == myPass) {
            setIsVisable(false);
        } else {
            Alert.alert("שם משתמש או סיסמה שגויים")
        }
        setMyUname("");
        setMyPass("");
        Keyboard.dismiss();
    }
    return (
        <MyBg>
            <Modal
                visible={isVisable}
                transparent={true}>
                <TouchableWithoutFeedback>
                    <View style={styles.screen}>
                        <View style={styles.container}>
                            <Text>Login</Text>
                            <TextInput onSubmitEditing={() => passRef.current.focus()} onChangeText={setMyUname} value={myUname} style={styles.input} />
                            <TextInput onSubmitEditing={checkUser} ref={passRef} onChangeText={setMyPass} value={myPass} style={styles.input} />
                            <TouchableOpacity onPress={checkUser} style={styles.btn}>
                                <Text>התחבר</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </MyBg>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: 300,
        height: 300,
        backgroundColor: "rgb(134, 184, 234)",
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: "rgb(95, 144, 193)"
    },
    input: {
        width: "90%",
        borderRadius: 15,
        backgroundColor: "white",
        marginVertical: 15
    }
})