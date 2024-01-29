import { FlatList } from 'react-native';
import OrderItem from '../Components/OrderItem';
import allOrders from '../Data/orders.json'

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
