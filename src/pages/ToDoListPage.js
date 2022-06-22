import React, {useState, useEffect} from "react";
import { View, FlatList} from 'react-native';
import axios from "axios";
import ToDoListCard from "../components/ToDoListCard";
import Loader from "../components/Loader";


function ToDoListPage(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const {data: ToDoListData} = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(ToDoListData);
        setLoading(false);
    }

    const renderToDoList = ({item}) => <ToDoListCard ToDoList={item}/>;

    return(
        <View>
            {
                loading ? 
                    (
                    <Loader/>
                    )
                    :
                    (
                        <View>
                            <FlatList
                            data={data}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderToDoList}
                            />
                        </View>
                    )
            }
        </View>
    )
}

export default ToDoListPage;