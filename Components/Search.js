import React, { useState } from 'react';
import { Text, Pressable, StyleSheet, View, TextInput } from 'react-native';
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { color } from '../Global/colors';

const Search = ({ setKeyword }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const search = () => {
        const expression = /.*[0-9]. */;
        if (expression.test(input)) {
            setError("No debe contener números");
        } else {
            setError("");
            setKeyword(input);
        }
    }


    const removeitem = () =>{
        setInput(""),
        setError("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder='Buscar producto'
                    value={input}
                    onChangeText={(t) => setInput(t)}
                />
                <Pressable onPress={search}>
                    <EvilIcons name='search' color="black" size={25} />
                </Pressable>
                <Pressable onPress={removeitem}>
                    <AntDesign name='closecircle' color="black" size={25} />
                </Pressable>
            </View>
            {error ? <Text style={{ color: 'red', textAlign:"center" }}>{error}</Text> : null}
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.grisclaro,
        width:"100%"
    },
    containerInput: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    input: {
        backgroundColor: color.azulmagenta,
        width: "70%",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: color.grisclaro,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10
    }
});
