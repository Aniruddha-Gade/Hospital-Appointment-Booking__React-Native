import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../../../assets/shared/Colors';
import ActionButton from './ActionButton'
import { Ionicons } from '@expo/vector-icons';
import SubHeading from '../../components/Home/SubHeading'
import HorizontalLine from '../../components/shared/HorizontalLine'
import { AntDesign } from '@expo/vector-icons';



const HospitalInfo = ({ hospital }) => {

    // console.log("hospital Info = ", hospital)
    const [showFullDesc, setShowFullDesc] = useState(false);
    const truncatedDesc = showFullDesc ? hospital.attributes.Description : hospital.attributes.Description.split(" ").slice(0, 18).join(" ")

    return hospital && (
        <View>
            <Text style={{ fontSize: 23, fontFamily: 'appFont-semibold' }}>
                {hospital.attributes.Name}
            </Text>

            <FlatList
                data={hospital.attributes.categories.data}
                horizontal={true}
                renderItem={({ item }) => (
                    <Text style={{ marginTop: 10, color: Colors.gray, marginRight: 6, }}>
                        {item.attributes.Name}
                    </Text>
                )}
            />

            <HorizontalLine />

            {/* Address */}
            <View style={{ display: 'flex', flexDirection: 'row', gap: 9, alignItems: 'center', }}>
                <Ionicons name="location-sharp" size={22} color={Colors.primary} />
                <Text style={{
                    fontSize: 18, fontFamily: 'appFont', color: Colors.gray
                }}>{hospital.attributes.Address}
                </Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', gap: 9, alignItems: 'center', marginTop: 6, marginBottom: 15 }}>
                <AntDesign name="clockcircle" size={16} color={Colors.primary} />
                <Text style={{ fontSize: 18, fontFamily: 'appFont', color: Colors.gray }}>
                    Mon Sun | 11Am - 8Am
                </Text>
            </View>

            <ActionButton />

            {/* horizonatl line */}
            <View style={{ borderBottomWidth: 1, borderColor: Colors.ligh_gray, margin: 5, marginTop: 10, marginBottom: 15 }}></View>


            <SubHeading subHeadingTitle={'About'} />


            {/* Description */}
            <Text>{truncatedDesc}</Text>

            <TouchableOpacity onPress={() => setShowFullDesc(prev => !prev)}>
                <Text style={{ color: Colors.primary, fontFamily: 'appFont-semibold', }}>
                    {showFullDesc ? 'Hide' : 'See More'}
                </Text>
            </TouchableOpacity>



        </View>
    );
}

export default HospitalInfo;
