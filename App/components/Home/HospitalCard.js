import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Colors from '../../../assets/shared/Colors'


export const HospitalCard = ({ hospital }) => {



    return (
        <View>
            <View style={{ width: 200, borderRadius: 10, borderWidth: 1, borderColor: Colors.ligh_gray, marginRight: 10 }}>
                <Image
                    source={{ uri: hospital.attributes.Image.data.attributes.url }}
                    style={{ width: '100%', height: 110, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                />
                <View style={{ padding: 7 }}>
                    <Text style={{ fontFamily: 'appFont-semibold', fontSize: 16 }}>
                        {hospital.attributes.Name}
                    </Text>
                    <Text style={{ color: Colors.gray }}>
                        {hospital.attributes.Address}
                    </Text>
                </View>
            </View>
        </View>
    )
}