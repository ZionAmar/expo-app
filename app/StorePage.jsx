import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyBg from '../components/MyBg'
import MySafe from '../components/MySafe'

const categories = [
    { id: 'c1', image: "https://img.mako.co.il/2022/06/09/shutterstock_1668941440_re_autoOrient_w.jpg", name: 'מוצרי חשמל' },
    { id: 'c2', image: "https://yadbeyad.org/wp-content/uploads/2021/03/20200211_123941.jpg", name: 'ביגוד והנעלה' },
    { id: 'c3', image: "https://dax.co.il/wp-content/uploads/2018/08/rondo-living-2.jpg", name: 'ריהוט לבית' }
];

const products = [
    { id: 'p1', categoryId: 'c1', name: 'מקרר' },
    { id: 'p2', categoryId: 'c1', name: 'טלוויזיה חכמה' },
    { id: 'p3', categoryId: 'c1', name: 'מחשב נייד' },
    { id: 'p4', categoryId: 'c1', name: 'סמארטפון' },
    { id: 'p5', categoryId: 'c1', name: 'מכונת כביסה' },
    { id: 'p6', categoryId: 'c1', name: 'מיקרוגל' },
    { id: 'p7', categoryId: 'c1', name: 'בלנדר' },
    { id: 'p8', categoryId: 'c1', name: 'שואב אבק' },
    { id: 'p9', categoryId: 'c1', name: 'מזגן' },
    { id: 'p10', categoryId: 'c1', name: 'תנור אפייה' },

    { id: 'p11', categoryId: 'c2', name: 'חולצה מכופתרת' },
    { id: 'p12', categoryId: 'c2', name: 'מכנסי ג\'ינס' },
    { id: 'p13', categoryId: 'c2', name: 'נעלי ספורט' },
    { id: 'p14', categoryId: 'c2', name: 'כובע מצחייה' },
    { id: 'p15', categoryId: 'c2', name: 'מעיל חורף' },
    { id: 'p16', categoryId: 'c2', name: 'גרביים' },
    { id: 'p17', categoryId: 'c2', name: 'עניבה' },
    { id: 'p18', categoryId: 'c2', name: 'חגורת עור' },
    { id: 'p19', categoryId: 'c2', name: 'סוודר' },
    { id: 'p20', categoryId: 'c2', name: 'צעיף' },

    { id: 'p21', categoryId: 'c3', name: 'ספה תלת מושבית' },
    { id: 'p22', categoryId: 'c3', name: 'שולחן סלון' },
    { id: 'p23', categoryId: 'c3', name: 'כיסא אוכל' },
    { id: 'p24', categoryId: 'c3', name: 'מיטה זוגית' },
    { id: 'p25', categoryId: 'c3', name: 'ארון בגדים' },
    { id: 'p26', categoryId: 'c3', name: 'שידת לילה' },
    { id: 'p27', categoryId: 'c3', name: 'מזנון' },
    { id: 'p28', categoryId: 'c3', name: 'כורסת טלוויזיה' },
    { id: 'p29', categoryId: 'c3', name: 'מדף ספרים' },
    { id: 'p30', categoryId: 'c3', name: 'שרפרף עץ' }
];

export default function StorePage() {
    let [catId, setCatId] = useState('');
    function myProd(){
        let res = products.filter(p=>p.categoryId==catId);
        return res;
    }
    return (
        <MyBg>
            <MySafe>
                <View>
                    <ScrollView
                        contentContainerStyle={{ gap: 15 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {categories.map(c =>
                            <TouchableOpacity
                                onPress={()=>setCatId(c.id)}
                                key={c.id}>
                                <ImageBackground
                                    style={styles.cat}
                                    imageStyle={{ borderRadius: 15 }}
                                    source={{ uri: c.image }}>
                                    <Text style={{ fontSize: 30, color: "white" }}>
                                        {c.name}
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                </View>
                <View style={{flex:1, marginTop: 20 }}>
                    <FlatList
                        ListEmptyComponent={<Text>אין מידע</Text>}
                        numColumns={2}
                        contentContainerStyle={{padding:20, gap: 15, alignItems: "center" }}
                        columnWrapperStyle={{ gap: 15 }}
                        data={myProd()}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <View style={styles.prod}>
                                <Text>{item.name}</Text>
                            </View>} />
                </View>
            </MySafe>
        </MyBg>
    )
}

const styles = StyleSheet.create({
    cat: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    prod: {
        width: 150,
        height: 150,
        backgroundColor: "#456",
        justifyContent: "center",
        alignItems: "center"
    }
})