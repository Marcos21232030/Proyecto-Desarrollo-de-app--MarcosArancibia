import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../Screens/Order';

const Stack = createNativeStackNavigator();
const OrderStack = () => {
        return (
            <Stack.Navigator
                initialRouteName='Orders'
                screenOptions={
                    ({ route }) => {
                        return {
                            header: () => <Header title='Ordenes' />
                        }
                    }
                }
            >
                <Stack.Screen name="Ordenes" component={Order} />
            </Stack.Navigator>
        )
    }
export default OrderStack;