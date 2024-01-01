import React from 'react';
import { View, Text, Image } from 'react-native';
import PageHeader from '../shared/PageHeader';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/shared/Colors';



const HospitalAppointementInfo = ({ hospital }) => {

  console.log("info = ", hospital)

  return (
    <View style={{ marginBottom: 15 }}>
      <PageHeader title={'Book Appointement'} />

      <View style={{ flexDirection: 'row', gap: 15, marginTop: 10, alignItems: 'center' }}>
        <Image
          source={{ uri: hospital.attributes.Image.data.attributes.url }}
          style={{
            width: 100, height: 100, borderRadius: 99
          }}
        />

        {/* name - address */}
        <View>
          <Text style={{ fontFamily: 'appFont-semibold', fontSize: 20, marginBottom: 8 }}>{hospital.attributes.Name}</Text>
          {/* Address */}
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', }}>
            <Ionicons name="location-sharp" size={22} color="black" />
            <Text style={{ fontSize: 18, fontFamily: 'appFont', color: Colors.gray, width: '80%' }}
            >{hospital.attributes.Address}
            </Text>
          </View>
        </View>

      </View>

    </View>
  );
}

export default HospitalAppointementInfo;
