import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions  } from 'react-native';
import { useEffect, useState } from 'react';
import { color } from '../Global/colors';
import { useSelector } from 'react-redux'


const ItemDetail = ({route}) => {

    const product = useSelector((state)=> state.shop.value.productSelected)
    const images = product.images ? product.images : []
  
  
  
    return (
      <View style={styles.container}>
        <View style={styles.content} >
            <Image
              style={styles.image}
              source={{uri:images[2]}}
              resizeMode='cover's
            />
            <View style={styles.containerText}>
              <Text style={styles.title}>{product.title}</Text>
              <Text>{product.description}</Text>
            </View>
            <View style={styles.containerPrice}>
              <Text style={styles.price}>$ {product.price}</Text>
              <Pressable style={styles.buyNow}>
                <Text style={styles.buyNowText}>Buy Now</Text>
              </Pressable>
            </View>
          </View>
      </View>
    )
  }
  
  export default ItemDetail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
    },
    content: {
        width: "100%"
    },
    contentLandscape: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginVertical: 15
    },
    image: {
        width: "100%",
        height: 300
    },
    imageLandscape: {
        width: 200,
        height: 200
    },
    goBack: {
        with: '100%',
        backgroundColor: color.beige,
        padding: 10,
        margin: 20,
        borderRadius: 10,
        borderBottomColor: "black",
    },
    containerTextLandscape: {
        width: "30%",
        flexDirection: "column"
    },
    containerText: {
        gap: 25,
        paddingHorizontal: 5,
        paddingVertical: 25
    },
    containerPriceLandscape: {
        width: "30%",
        flexDirection: "column"
    },
    containerPrice: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 10
    },
    buyNow: {
        with: '100%',
        backgroundColor: color.azulmajorelle,
        padding: 10,
        margin: 20,
        borderRadius: 10,
        borderBottomColor: "black",
    },
    buyNowText: {
        color: "white",
        fontSize: 15
    },
    textbutton: {
        color: "white",
        fontSize: 15
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 10,
    },
    description: {
        margin: 10,
        fontFamily: "Raleway"
    },
    price: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
    }

});