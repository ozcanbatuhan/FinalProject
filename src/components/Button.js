import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const Button = ({text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00ced1",
        borderRadius: 5,
        padding: 10,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
    },
})

export default Button;