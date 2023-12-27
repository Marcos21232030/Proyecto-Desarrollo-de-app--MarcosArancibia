import { StyleSheet, Text, View } from 'react-native'
import {Feather} from "@expo/vector-icons";

const TabIconOrder = ({ icon, label, focused }) => {
    return (
        <View style={styles.container}>
            <Feather name='list' size={40}  color={focused ? "white" : "#c0c4c0"} />
            <Text style={{ ...styles.text, ...{ color: focused ? "white" : "#c0c4c0" } }}>{label}</Text>
        </View>
    )
}

export default TabIconOrder

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        color: "white",
        textAlign: "center"
    }
})