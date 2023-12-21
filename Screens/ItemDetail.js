import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions  } from 'react-native';
import Header from '../Components/Header';
import allProduct from '../Data/products.json';
import { useEffect, useState } from 'react';
import { color } from '../Global/colors';

const ItemDetail = ({route}) => {
    const {id} = route.params

    const [product, setProduct] = useState({})

    const { width, height } = useWindowDimensions()
    const [landscape, setLandscape] = useState(false)

    useEffect(() => {
        if (width > height) {
            setLandscape(true)
        } else {
            setLandscape(false)
        }
    }, [width, height])

    useEffect(() => {

        const productFinded = allProduct.find(product => product.id === id )
        setProduct(productFinded)

    }, [id])




    return (
        <View style={styles.container}>
            <View style={landscape ? styles.contentLandscape : styles.content} >
                <Image
                    style={landscape ? styles.imageLandscape : styles.image}
                    source={{ uri: product.thumbnail }}
                    resizeMode='cover'
                />
                <View style={landscape ? styles.containerTextLandscape : styles.containerText}>
                    <Text style={styles.tile}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <View style={landscape ? styles.containerPriceLandscape : styles.containerPrice}>
                    <Text style={styles.price}> $ {product.price}</Text>
                    <Pressable style={styles.buyNow}>
                        <Text style={styles.buyNowText}>
                            Comprar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ItemDetail;

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
    tile: {
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
