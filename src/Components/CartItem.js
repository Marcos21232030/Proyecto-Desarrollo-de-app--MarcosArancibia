import { Text, StyleSheet, View } from 'react-native'
import { Fontisto } from "@expo/vector-icons";
import { color } from '../Global/colors';


const CartItem = ({ item }) => {

    return (
        <View style={styles.container} >
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>Cantidad: {item.quantity} Precio $ {item.price}</Text>
            </View>
            <Fontisto name='trash' size={25} color='white' />
        </View>
    )
}
export default CartItem;
const styles = StyleSheet.create({
    container: {
        backgroundColor: color.azul,
        margin: 10,
        padding: 10,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2
    },
    textContainer:{
        width: '70',
        gap:5
    },
    text1:{
        fontSize: 19,
        color: color.azulmajorelle
    },
    text2:{
        fontSize: 17,
        color: 'white'
    }
})