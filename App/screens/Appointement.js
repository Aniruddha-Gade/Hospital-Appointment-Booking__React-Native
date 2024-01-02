import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import PageHeader from '../components/shared/PageHeader'
import globalApi from '../../services/globalApi';
import { useUser } from '@clerk/clerk-expo';
import AppointementCard from '../components/Appointement/AppointementCard'


const Appointement = () => {

  const [appointementList, setAppointementList] = useState([]);

  const { user } = useUser();
  const userEmail = user.primaryEmailAddress.emailAddress;

  useEffect(() => {
    getUserAppointements();
  }, [])

  const getUserAppointements = () => {
    globalApi.getUserAppointements(userEmail).then(res => {
      // console.log("User Appointement Data = ", res.data.data)
      setAppointementList(res.data.data)
    })
      .catch(error => {
        console.log("🔴 Error while fetching User appointement data = ", error)
      })
  }

  // console.log("appointementList = ", appointementList)



  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={'My Appointements'} backBtn={false} />

      <FlatList
        data={appointementList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AppointementCard appointement={item} />
        )}

      />

    </View>
  );
}

export default Appointement;
