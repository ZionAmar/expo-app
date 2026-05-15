import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyFlat() {
    let [isRefresh, setIsRefresh] = useState(false);
    function myRef() {
        setIsRefresh(true);
        setTimeout(() => {
            setIsRefresh(false);
        }, 2000);
    }
    let arr = [];
    for (let i = 0; i < 50; i++) {
        arr.push({ id: i })
    }
    // arr = []
    return (
        <SafeAreaView>
            <FlatList
                refreshing={isRefresh}
                onRefresh={ ()=>myRef()}
                // horizontal={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
                ItemSeparatorComponent={<View style={{ borderWidth: 1 }}></View>}
                ListEmptyComponent={<Text>אין מידע</Text>}
                columnWrapperStyle={{ gap: 20 }}
                ListHeaderComponent={<Text>Header</Text>}
                ListFooterComponent={<Text>Footer</Text>}
                numColumns={3}
                data={arr}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text>{item.id}</Text>} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})