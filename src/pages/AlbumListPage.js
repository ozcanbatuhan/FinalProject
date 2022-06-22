import React, {useState, useEffect} from "react";
import { View, FlatList } from 'react-native';
import axios from "axios";
import AlbumListCard from "../components/AlbumListCard";
import Loader from "../components/Loader";


function AlbumListPage(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const {data: albumlistData} = await axios.get("https://jsonplaceholder.typicode.com/albums");
        setData(albumlistData);
        setLoading(false);
    }

    const renderAlbumList = ({item}) => <AlbumListCard albumList={item}/>;

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
                            renderItem={renderAlbumList}
                            showsVerticalScrollIndicator={false}
                            />
                        </View>
                    )
            }
        </View>
    )
}

export default AlbumListPage;