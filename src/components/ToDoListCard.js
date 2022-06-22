import React from "react";
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';


const ToDoListCard = ({ToDoList}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textContainer}>{ToDoList.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#eeeeee",
        borderColor: "gray",
        borderWidth: 1,
        alignItems: "center"
    },
    textContainer: {
        height: 25,
    }
})

export default ToDoListCard;