import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import PageHeader from '../shared/PageHeader';
import HospitalDoctorTab from '../HospitalDoctorScreen/HospitalDoctorTab';
import globalApi from '../../../services/globalApi';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DoctorCardItem from '../shared/DoctorCardItem';
import HospitalCardItem from '../shared/HospitalCardItem';

const HospitalDoctorListScreen = () => {

  const param = useRoute().params;
  const [hospitalList, setHospitalList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [activeTab, setActiveTab] = useState('Hospital')
  const navigation = useNavigation()

  useEffect(() => {
    getHospitalByCategory()
    // console.log("HOSPITAL LIST BY  CATEGORY DATA ====== ", hospitalList)
    getDoctorsByCategory()
    // console.log(`DOCTOR LIST BY ${param.categoryName} CATEGORY DATA ===== ${doctorList}`)

  }, [])


  //  get hospitals data by category 
  const getHospitalByCategory = () => {
    globalApi.getHospitalByCategory(param.categoryName).then(res => {
      // console.log(`Hosptials by ${param.categoryName} Category data = ${res.data.data}`)
      setHospitalList(res.data.data)
    })
      .catch(error => {
        console.log("Error while Fetching data by Category = ")
        console.log(error)
      })
  }

  //  get doctors data by category 
  const getDoctorsByCategory = () => {
    globalApi.getDoctorsByCategory(param.categoryName).then(res => {
      // console.log(`Doctors by ${param.categoryName} Category data = ${res.data.data}`)
      setDoctorList(res.data.data)
    })
      .catch(error => {
        console.log("Error while Fetching data by Category = ")
        console.log(error)
      })
  }

  return (

    <View style={{ padding: 20 }}>
      <PageHeader title={param.categoryName} />
      <HospitalDoctorTab activeTab={(val) => setActiveTab(val)} />

      {
        !hospitalList?.length ?
          <ActivityIndicator size={'large'} color={Colors.primary} style={{ marginTop: '50%' }} />
          :
          activeTab === 'Hospital' ?

            <View style={{ marginTop: 15 }}>
              <FlatList
                data={hospitalList}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('hospital-details', { hospital: item })}>
                    <HospitalCardItem hospital={item} />
                  </TouchableOpacity>
                )}
              />
            </View>

            :
            <View style={{ marginTop: 15 }}>
              <FlatList
                data={doctorList}
                renderItem={({ item }) => (
                  <DoctorCardItem doctor={item} />
                )}
              />
            </View>
      }


    </View>
  );
}

export default HospitalDoctorListScreen;
