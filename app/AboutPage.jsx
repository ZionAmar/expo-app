import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyBg from '../components/MyBg'
import MySafe from '../components/MySafe'
import MyView2 from '../components/MyView2'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function AboutPage() {
    return (
        <MyBg>
            <MySafe>
                <MyView2>
                    <Image
                        style={{ width: 200, height: 200, borderRadius: 100 }}
                        source={require('../assets/images/logo.png')} />
                    <Text style={{textAlign:"right",margin:10}}>
                        שמי ציון עמר, והגישה שלי לפיתוח תוכנה נבנתה מהיסודות. במשך עשור עבדתי כשיפוצניק ומנהל אחזקה במוסדות חינוך ובבסיסי צה"ל — עבודה שבה כל יום הוא אתגר חדש. למדתי לפתור בעיות, להבין איך מערכות עובדות לעומק, ולתקן דברים עם הידיים. למדתי את החשיבות של עבודה יסודית – כי כשאתה בונה משהו, אתה רוצה שהוא יחזיק מעמד.

                        את התשוקה הזו לבנייה ופתרון בעיות לקחתי לעולם התוכנה. כבוגר הנדסאי תוכנה בהצטיינות וכיום כמרצה לפיתוח תוכנה במגוון שפות, אני משלב את הראייה הפרקטית מהשטח עם עומק טכנולוגי. אני לא רק כותב קוד, אני בונה פתרונות – עם אותה מסירות, יצירתיות, ואותה שאיפה למצוינות שהנחו אותי תמיד.
                    </Text>
                    <View style={styles.btns}>
                        <TouchableOpacity onPress={()=>Linking.openURL('mailto:aztodev@gmail.com')}>
                            <MaterialIcons name="email" size={24} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Linking.openURL('tel:0549774827')}>
                            <FontAwesome5 name="phone-alt" size={24} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Linking.openURL('https://aztodev.com')}>
                            <MaterialCommunityIcons name="web" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </MyView2>
            </MySafe>
        </MyBg>
    )
}

const styles = StyleSheet.create({
    btns:{
        flexDirection:"row",
        gap:"20%"
    }
})