import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../components/shared/PageHeader';
import HospitalInfo from '../components/HospitalDetails/HospitalInfo';
import Colors from '../../assets/shared/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const HospitalDetails = () => {
  const [hospital, setHospital] = useState(null);
  const route = useRoute();
  const navigation = useNavigation()

  useEffect(() => {
    if (route.params && route.params.hospital) {
      setHospital(route.params.hospital);
    }
  }, [route.params]);

  if (!hospital) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '50%', }}>
        <Text style={{ fontSize: 45 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView>
        <View style={{ position: 'absolute', margin: 15, zIndex: 10 }}>
          <PageHeader />
        </View>

        <View>
          <Image
            source={{ uri: hospital.attributes.Image.data.attributes.url }}
            style={{
              width: '100%',
              height: 260
            }}
          />

          <View style={{ marginTop: -20, backgroundColor: Colors.white, borderTopRightRadius: 20, borderTopLeftRadius: 20, padding: 20 }}>
            <HospitalInfo hospital={hospital} />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('book-appointement', { hospital: hospital })}
        style={{ backgroundColor: Colors.primary, borderRadius: 99, padding: 13, margin: 10, left: 0, right: 0, marginBottom: 10, zIndex: 20, }}
      >
        <Text style={{ fontSize: 20, textAlign: 'center', color: Colors.white, fontFamily: 'appFont-semibold', fontSize: 17 }}>
          Book Appointement
        </Text>
      </TouchableOpacity>

    </View>
  );
}

export default HospitalDetails;
