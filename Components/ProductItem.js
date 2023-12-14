import { StyleSheet, Text, View, Image } from 'react-native'
import { color } from '../Global/colors'

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image} 
        resizeMode='cover'
        source={{uri:item.thumbnail}}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: color.azul,
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30
  },
  text: {
    color: 'white'
  },
  image: { 
    width: 50,
    height: 50,
  }
})
