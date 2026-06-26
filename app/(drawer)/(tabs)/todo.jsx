import { Alert, FlatList, Keyboard, KeyboardAvoidingView, Modal, Platform, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MyBg from '../../../components/MyBg'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TodoPage() {
    let [myTodo, setMyTodo] = useState("");
    let [myList, setMyList] = useState([]);
    let [isVisable, setIsVisable] = useState(false);
    let [isAddVisable, setIsAddVisable] = useState(false);
    let [selectedTodo, setSelectedTodo] = useState("");
    let [isRef, setIsRef] = useState(false);

    async function load() {
        let st = await AsyncStorage.getItem('myTodos');
        if (st) setMyList(JSON.parse(st));
    }

    useEffect(() => { load(); }, [])

    async function addTodo() {
        if (!myTodo.trim()) return;
        
        let newItem = { id: Date.now().toString(), text: myTodo.trim() };
        let newList = [newItem, ...myList];
        
        setMyList(newList);
        await AsyncStorage.setItem('myTodos', JSON.stringify(newList));
        
        setMyTodo("");
        setIsAddVisable(false);
        Keyboard.dismiss();
    }

    async function deleteTodo(id) {
        let newList = myList.filter(item => item.id !== id);
        setMyList(newList);
        await AsyncStorage.setItem('myTodos', JSON.stringify(newList));
    }

    function showTodo(text) {
        setSelectedTodo(text);
        setIsVisable(true);
    }

    function askDelete(id) {
        Alert.alert("מחיקת משימה", "האם למחוק את המשימה?", [
            { text: "ביטול" },
            { text: "מחק", onPress: () => deleteTodo(id) }
        ])
    }

    function myRef() {
        setIsRef(true);
        load();
        setTimeout(() => setIsRef(false), 2000);
    }

    return (
        <MyBg>
            <View style={{ flex: 1, margin:10 }}>
                <FlatList
                    ListEmptyComponent={<Text style={styles.empty}>אין משימות</Text>}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={isRef} onRefresh={myRef} />}
                    data={myList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => showTodo(item.text)}
                            onLongPress={() => askDelete(item.id)}
                            style={styles.item}>
                            <Text style={styles.itemText}>{item.text}</Text>
                        </TouchableOpacity>
                    } />

                <TouchableOpacity onPress={() => setIsAddVisable(true)} style={styles.plusBtn}>
                    <Ionicons name="add" size={36} color="white" />
                </TouchableOpacity>
            </View>

            <Modal visible={isAddVisable} transparent={true} animationType="slide" onRequestClose={() => setIsAddVisable(false)}>
                <View style={styles.screen} onTouchStart={() => { setIsAddVisable(false); Keyboard.dismiss(); }}>
                    <View style={styles.modalBox} onTouchStart={(e) => e.stopPropagation()}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                            <Text style={styles.modalTitle}>משימה חדשה</Text>
                            <TextInput
                                autoFocus={true}
                                onSubmitEditing={addTodo}
                                value={myTodo}
                                onChangeText={setMyTodo}
                                placeholder="כתוב משימה..."
                                style={styles.input} />
                            <TouchableOpacity onPress={addTodo} style={styles.btn}>
                                <Text style={styles.btnText}>הוסף</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </Modal>

            <Modal visible={isVisable} transparent={true} animationType="fade" onRequestClose={() => setIsVisable(false)}>
                <View style={styles.screen} onTouchStart={() => setIsVisable(false)}>
                    <View style={styles.modalBox} onTouchStart={(e) => e.stopPropagation()}>
                        <Text style={styles.modalTitle}>פרטי משימה</Text>
                        <Text style={styles.modalText}>{selectedTodo}</Text>
                        <TouchableOpacity onPress={() => setIsVisable(false)} style={styles.btn}>
                            <Text style={styles.btnText}>סגור</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </MyBg>
    )
}

const styles = StyleSheet.create({
    listContainer: { padding: 20, gap: 15, paddingBottom: 90 },
    empty: { textAlign: "center", fontSize: 18, marginTop: 40, color: "#456" },
    item: {
        backgroundColor: "rgb(195, 223, 251)",
        padding: 20,
        borderRadius: 15,
        elevation: 3,
    },
    itemText: { fontSize: 18, textAlign: "right", color: "#333" },
    plusBtn: {
        position: "absolute",
        bottom: 25,
        left: 25,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "rgb(94, 172, 249)",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    input: { width: 250, borderRadius: 15, backgroundColor: "white", padding: 15, fontSize: 16, textAlign: "right", marginBottom: 15 },
    btn: { width: 250, padding: 15, borderRadius: 15, backgroundColor: "rgb(95, 144, 193)", alignItems: "center" },
    btnText: { color: "white", fontWeight: "bold", fontSize: 16 },
    screen: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
    modalBox: { backgroundColor: "rgb(134, 184, 234)", padding: 25, borderRadius: 15, alignItems: "center" },
    modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
    modalText: { fontSize: 18, textAlign: "right", marginBottom: 20, color: "#222" }
})