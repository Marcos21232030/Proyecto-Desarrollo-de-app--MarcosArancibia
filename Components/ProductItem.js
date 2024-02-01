import { StyleSheet, Text, Image, Pressable } from 'react-native'
import { color } from '../Global/colors'
import { useWindowDimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductSelected } from '../Features/shop/shopSlice'


const ProductItem = ({ item, navigation, route }) => {

  const { width } = useWindowDimensions()
  const dispatch = useDispatch()
  return (
    <Pressable style={styles.container} onPress={() => {
      dispatch(setProductSelected(item.id))
      navigation.navigate("ItemDetail", { id: item.id })
    }} >
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: item.thumbnail }}
      />
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: '100',
    backgroundColor: color.azul,
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    gap: 30
  },
  text: {
    color: 'white',
    width: '70%',
    textAlign: 'center',
    fontSize: 20
  },
  textMin: {
    width: '70%',
    textAlign: 'center',
    fontSize: 20
  },
  image: {
    minWidth: 90,
    height: 90,
    width: '30%',

  }
})