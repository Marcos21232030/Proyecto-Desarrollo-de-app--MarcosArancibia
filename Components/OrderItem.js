import { StyleSheet, Text, View } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import { color } from '../Global/colors'

const OrderItem = ({order}) => {
    const total = order.items
        .reduce((acc,product)=> acc + (product.price * product.quantity),0)

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
            <Text style={styles.text1}>{new Date(order.CreatedAt).toLocaleString()}</Text>
            <Text style={styles.text2}>Total: $ {total}</Text>
      </View>
      <Ionicons name="search-outline" size={25} color="white"/>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: color.beige,
        margin:10,
        padding:10,
        height:100,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        width:"70",
        gap:5
    },
    text1:{
        fontSize:19,
        fontWeight:"bold",
        fontFamily:"Josefin",
        color: color.carbon
    },
    text2:{
        fontSize:17,
        fontFamily:"Josefin",
        marginTop: 10
    }
})