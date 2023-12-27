import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { color } from '../Global/colors'
import { useSelector } from 'react-redux'


const ItemListCategories = ({ navigation, route }) => {
  const productsFilteredByCategory = useSelector(state => state.shop.value.productsFilteredByCategory)
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState(productsFilteredByCategory)

  useEffect(() => {

    const productsFiltered = productsFilteredByCategory.filter(product => product.title.includes(keyword))
    setProducts(productsFiltered)


  }, [keyword, productsFilteredByCategory])

  return (
    <>
      <Search setKeyword={setKeyword} />
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} navigation={navigation} route={route} />}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  goBack: {
    with: '100%',
    backgroundColor: color.beige,
    padding: 10,
    margin: 20,
    borderRadius: 10,
    borderBottomColor: "black",
  },
  textbutton: {
    color: "white",
    fontSize: 15
  }
})