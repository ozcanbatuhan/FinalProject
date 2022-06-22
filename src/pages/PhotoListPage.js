import React, {useState, useEffect} from "react";
import { View, FlatList } from 'react-native';
import axios from "axios";
import PhotoListCard from "../components/PhotoListCard";
import Loader from "../components/Loader";

function PhotoListPage(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const {data: photoListData} = await axios.get("https://jsonplaceholder.typicode.com/photos");
        setData(photoListData);
        setLoading(false);
    }

    const renderPhotoList = ({item}) => <PhotoListCard PhotoList={item}/>;

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
                            showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={renderPhotoList}
                            />
                        </View>
                    )
            }
        </View>
    )
}

export default PhotoListPage;