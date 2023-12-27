import { StyleSheet, Text, View } from 'react-native'
import { Zocial} from "@expo/vector-icons"

const TabIconCart = ({ icon, label, focused }) => {
    return (
        <View style={styles.container}>
            <Zocial name='cart' size={40}  color={focused ? "white" : "#c0c4c0"} />
            <Text style={{ ...styles.text, ...{ color: focused ? "white" : "#c0c4c0" } }}>{label}</Text>
        </View>
    )
}

export default TabIconCart

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        color: "white",
        textAlign: "center"
    }
})