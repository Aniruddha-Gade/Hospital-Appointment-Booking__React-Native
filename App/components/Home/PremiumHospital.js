import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import SubHeading from './SubHeading';
import globalApi from '../../../services/globalApi';
import { HospitalCard } from './HospitalCard';





const PremiumHospital = () => {

    const [hospitalList, setHospitalList] = useState([]);

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
                    <HospitalCard hospital={item} key={index} />
                )}w
            />

        </View>
    );
}

export default PremiumHospital;
