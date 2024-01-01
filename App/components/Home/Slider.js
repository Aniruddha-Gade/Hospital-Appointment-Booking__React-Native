import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import globalApi from '../../../services/globalApi';

const Slider = () => {

    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        getSlider();
    }, [])

    const getSlider = () => {
        // console.log("Calling Api")
        globalApi.getSlider().then(res => {
            // console.log('Slider data === ', res)
            setSliderList(res.data.data)
        })
        // console.log("completed")
    }

    // temp data
    // const sliderList = [
    //     {
    //         id: 0,
    //         name: 'slider 0',
    //         imageUrl: 'https://img.freepik.com/free-vector/cartoon-online-medical-conference-illustration_23-2148890693.jpg?w=1380&t=st=1702101054~exp=1702101654~hmac=5ac935c5df5028f889f9e31a0861de2d1832e6f02d5f81676730b8b9eb74e1de'

    //     },
    //     {
    //         id: 1,
    //         name: 'slider 1',
    //         imageUrl: 'https://img.freepik.com/free-vector/online-doctor-concept_23-2148526026.jpg?w=1380&t=st=1702101082~exp=1702101682~hmac=8c2e8c1a14e22101c8da5c7ffbbab467a4c559838984ba4763efdaf644858e5d'

    //     },
    //     {
    //         id: 2,
    //         name: 'slider 2',
    //         imageUrl: 'https://img.freepik.com/free-vector/psychologist-online-service-platform-mental-health-diagnostic-thoughts-emotions-analysis-online-consultation-vector-flat-illustration_613284-1404.jpg?w=1060&t=st=1702100397~exp=1702100997~hmac=3b035155eb31e4411ef7f70d25757d074c06a4a331665916ae8dfe39c1050fa5'

    //     },
    //     {
    //         id: 3,
    //         name: 'slider 3',
    //         imageUrl: 'https://img.freepik.com/free-vector/hospital-reception-scene-with-face-masks_52683-55277.jpg?w=1380&t=st=1702101119~exp=1702101719~hmac=a1f00b1c66096538844ed2e2a86a2be8e66f9c25bf2f2bf43d8357c2c13c3ae2'

    //     },
    //     {
    //         id: 4,
    //         name: 'slider 4',
    //         imageUrl: 'https://img.freepik.com/free-vector/online-doctor-concept_23-2148533957.jpg?w=1380&t=st=1702101169~exp=1702101769~hmac=8222feaea864b1a8d95d0fe4e2b61366584f1d2e8d83b45aca8618e7574347eb'

    //     },
    // ]

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        key={item.id}
                        source={{ uri: item.attributes.Image.data.attributes.url }}
                        style={{
                            width: Dimensions.get('screen').width * 0.9,
                            height: 170,
                            margin: 2,

                            borderRadius: 10,
                            objectFit: 'contain'
                        }}
                    />
                )}
            />



        </View>
    );
}

export default Slider;
