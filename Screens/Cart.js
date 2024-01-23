import { Text, StyleSheet, View, Pressable } from 'react-native';
import { FlatList } from 'react-native';
import CartItem from '../Components/CartItem';
import { color } from '../Global/colors';
import { useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../App/services/shopServices';


const Cart = () => {

  const cart = useSelector(state => state.cart.value)
  const [triggerPostOrder] = usePostOrdersMutation()
  return (
    <View style={styles.container}>
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable onPress={()=> triggerPostOrder(cart)}>
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Text style={styles.text}>Total: $ {cart.total} </Text>
        </View>
    </View>
   
  )
}

export default Cart
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 130,
  },
  confirmContainer: {
    backgroundColor: color.moradoperlado,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: color.blanco,
    margin: 15,
  },
  boton:{
    backgroundColor: color.beige,
    borderRadius: 10
  }
});