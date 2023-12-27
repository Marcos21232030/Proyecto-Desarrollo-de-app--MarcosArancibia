import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"

const TabIcon = ({ icon, label, focused }) => {
    return (
        <View style={styles.container}>
            <Entypo name='shop' size={40}  color={focused ? "white" : "#c0c4c0"}/>
            <Text style={{ ...styles.text, ...{ color: focused ? "white" : "#c0c4c0" } }}>{label}</Text>
        </View>
    )
}

export default TabIcon

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        color: "white",
        textAlign: "center"
    }
})