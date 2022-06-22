import React from "react";
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';


const PhotoListCard = ({PhotoList}) => {
    return(
        <View style={styles.container}>
            <Image
            style={styles.imageContainer}
            source={{uri: PhotoList.url}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        margin: 10,
    },
    imageContainer: {
        height: Dimensions.get('window').height/5,
        width: Dimensions.get('window').width,
    }
})

export default PhotoListCard;