import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'
import HospitalAppointementInfo from '../components/BookAppointement/HospitalAppointementInfo';
import HorizontalLine from '../components/shared/HorizontalLine';
import ActionButton from '../components/HospitalDetails/ActionButton';
import BookingSection from '../components/BookAppointement/BookingSection';
import { ScrollView } from 'react-native-gesture-handler';

const BookAppointement = () => {
  const route = useRoute();

  return (
    <ScrollView style={{ padding: 20 }}>
      <HospitalAppointementInfo hospital={route.params.hospital} />
      <ActionButton />
      <HorizontalLine />
      <BookingSection hospital={route.params.hospital} />

    </ScrollView>
  );
}

export default BookAppointement;
