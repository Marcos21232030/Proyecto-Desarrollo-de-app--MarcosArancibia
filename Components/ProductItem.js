import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { color } from '../Global/colors'
import { useWindowDimensions } from 'react-native-web'
import { useEffect } from 'react'

const ProductItem = ({ item, navigation, route}) => {
  const { width } = useWindowDimensions()


  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate("ItemDetail", {id:item.id})}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: item.thumbnail }}
      />
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
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
    fontSize: '20'
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
