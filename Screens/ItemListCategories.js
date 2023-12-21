import { Pressable, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import { FlatList, View, Text, Button } from 'react-native-web'
import allProducts from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { useState } from 'react'
import { color } from '../Global/colors'



const ItemListCategories = ({navigation, route }) => {
  const {category} = route.params

  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState(allProducts)

  useEffect(() => {
    if (category) {
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    } else {
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }

  }, [keyword])

  return (
    <>
      <Search setKeyword={setKeyword} />

      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} navigation={navigation} route={route}/>}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  goBack:{
    with:'100%',
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