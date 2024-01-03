import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SubHeading from './SubHeading';
import globalApi from '../../../services/globalApi';
import { HospitalCard } from './HospitalCard';
import { useNavigation } from '@react-navigation/native'



const PremiumHospital = () => {

    const [hospitalList, setHospitalList] = useState([]);
    const navigation = useNavigation()


    useEffect(() => {
        getPremiumHospital()
    }, [])

    const getPremiumHospital = () => {
        globalApi.getPremiumHospital().then((res) => {
            // console.log("Premium Hospital Data = ", res)
            setHospitalList(res.data.data);
        })
            .catch(error => {
                console.log("Error while fetching Premium Hospital")
                console.log(error)
            })
    }

    return (
        <View style={{ marginTop: 10 }}>
            <SubHeading subHeadingTitle={'Our Premium Hospital'} />

            <FlatList
                data={hospitalList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('hospital-details', { hospital: item })}>
                        <HospitalCard hospital={item} key={index} />
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}

export default PremiumHospital;
