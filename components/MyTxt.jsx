import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyTxt() {
  return (
    <View>
      <Text numberOfLines={10} style={styles.txt}>שמי ציון עמר, והגישה שלי לפיתוח תוכנה נבנתה מהיחינוך ובבסיסי צה"ל — עבודה שבהדה <Text style={{color:"red"}}>1234</Text>יסודית – כי כשאתה בונה משהו, אתה רוצה שהוא יחזיק מעמד.

את התשוקה הזו לבנייה ופתרון בעיות לקחתי לעולם התוכנה. כבוגר הנדסאי תוכנה בהצטיינות וכיום כמרצה לפיתוח תוכנה במגוון שפות, אני משלב את הראייה הפרקטית מהשטח עם עומק טכנולוגי. אני לא רק כותב קוד, אני בונה פתרונות – עם אותה מסירות, יצירתיות, ואותה שאיפה למצוינות שהנחו אותי תמיד.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    txt:{
        marginTop:50,
        fontSize:30,
        fontStyle:"italic",
        fontWeight:"bold",
        textAlign:"center",
        textShadowColor:"#456",
        textShadowOffset:{width:2,height:4},
        textShadowRadius:8,
        lineHeight:60,
        letterSpacing:5
    }
})