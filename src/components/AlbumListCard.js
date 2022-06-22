import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const AlbumListCard = ({albumList}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textContainer}>{albumList.title}</Text>
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

export default AlbumListCard;