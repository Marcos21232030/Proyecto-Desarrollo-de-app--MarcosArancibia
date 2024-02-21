import { Pressable, StyleSheet, Text } from 'react-native'
import CardShadow from '../Wrappers/CardShadow'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory } from "../Features/shop/cart/shopSlice"
import { color } from '../Global/colors'

const CategoryItem = ({ category, navigation, route }) => {

  const dispatch = useDispatch()

  return (
    <Pressable onPress={() => {
      dispatch(setProductsFilteredByCategory(category))
      navigation.navigate("ItemListCategories", { category })
    }}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: color.azul,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  }
})