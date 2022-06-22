import React from "react";
import { Text, View, StyleSheet} from "react-native";
import Button from "../components/Button";

function Home({navigation}){


    function goToAlbumListPage(){
        navigation.navigate("AlbumListPage");
    }

    function goToPhotoListPage(){
        navigation.navigate("PhotoListPage")
    }

    function goToToDoListPage(){
        navigation.navigate("ToDoListPage")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>PAGES</Text>
            <Button text="Album List Page" onPress={goToAlbumListPage}/>
            <Button text="Photo List Page" onPress={goToPhotoListPage}/>
            <Button text="ToDo List Page" onPress={goToToDoListPage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 20
    }
})

export default Home;