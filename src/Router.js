import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import AlbumListPage from "./pages/AlbumListPage";
import PhotoListPage from "./pages/PhotoListPage";
import ToDoListPage from "./pages/ToDoListPage";

const Stack = createStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Home}
                />
                <Stack.Screen 
                name="AlbumListPage"
                component={AlbumListPage}
                />
                <Stack.Screen 
                name="PhotoListPage"
                component={PhotoListPage}
                />
                <Stack.Screen 
                name="ToDoListPage"
                component={ToDoListPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;