import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../../../assets/shared/Colors';
import { Ionicons } from '@expo/vector-icons';


const HospitalCardItem = ({ hospital }) => {

    //   console.log("hospital = ", hospital)



    return (
        <View style={{ marginBottom: 20, }}>
            <Image
                source={{ uri: hospital.attributes.Image.data.attributes.url }}
                style={{
                    width: '100%',
                    height: 140,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                }}
            />

            <View style={{ padding: 10, backgroundColor: Colors.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <Text style={{ fontSize: 18, fontFamily: 'appFont-semibold' }}>
                    {hospital.attributes.Name}
                </Text>


                {/* all categories of hospital */}
                <FlatList
                    data={hospital.attributes.categories.data}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Text style={{ marginTop: 10, color: Colors.gray }}>
                            {item.attributes.Name}
                        </Text>
                    )}
                />
                <View style={{ borderWidth: 1, borderColor: Colors.ligh_gray, margin: 5, marginBottom: 10 }}></View>

                {/* Address */}
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', }}>
                    <Ionicons name="location-sharp" size={20} color={Colors.primary} />
                    <Text>{hospital.attributes.Address}</Text>
                </View>

                {/* watch */}
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 4 }}>
                    <Ionicons name="eye" size={20} color={Colors.primary} />
                    <Text>450 Views</Text>
                </View>
            </View>
        </View>
    );
}

export default HospitalCardItem;
