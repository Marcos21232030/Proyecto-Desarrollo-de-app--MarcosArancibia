import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native';
import OrderItem from '../Components/OrderItem';
import allOrders from '../Data/order.json'

const Orders = () => {

    return (
        <FlatList
            data={allOrders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <OrderItem order={item} />}
        />
    )
}

export default Orders;

const styles = StyleSheet.create({})