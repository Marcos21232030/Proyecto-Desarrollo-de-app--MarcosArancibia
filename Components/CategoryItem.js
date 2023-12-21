import {  Pressable, StyleSheet, Text, View } from 'react-native'
import { color } from '../Global/colors'
import CardShadow from '../Wrappers/cardShadow'


const CategoryItem = ({category, navigation, route}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ItemListCategories", {category})}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:color.azul,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    }, 
    text:{
      color: "white"
    }
})