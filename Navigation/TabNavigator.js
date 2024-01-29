import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { color } from '../Global/colors';
import OrderStack from './OrdersStack';
import TabIcon from '../Components/TabIcon';
import TabIconCart from '../Components/TabIconCart';
import TabIconOrder from '../Components/TabIconOrder';
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }} >
            <Tab.Screen
                name="ShopStack"
                component={ShopStack}
                options={{
                    tabBarIcon: (focused) => <TabIcon icon="shop" label="Productos" focused={focused} />
                }} />
            <Tab.Screen name="CartStack"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabIconCart icon="cart" label="Carrito" focused={focused} />
                }} />
            <Tab.Screen name="OrderStack"
                component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabIconOrder icon="list" label="Ordenes" focused={focused} />
                }} />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="user" label="Perfil" focused={focused} />
                }}
            />
        </Tab.Navigator>
    )
}


export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: color.marron,
        elevation: 4,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90


    }
})