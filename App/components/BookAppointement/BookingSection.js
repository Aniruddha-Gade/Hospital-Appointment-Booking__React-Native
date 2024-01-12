import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import Colors from '../../../assets/shared/Colors';
import SubHeading from '../../components/Home/SubHeading';
import moment from 'moment'
import { useUser } from '@clerk/clerk-expo';
import globalApi from '../../../services/globalApi';



const BookingSection = ({ hospital }) => {

  const [next7Days, setNext7Days] = useState([])
  const [selectedDate, setSelectedDate] = useState(next7Days[0]?.date);
  const [timeList, setTimeList] = useState([])
  const [selectedTime, setSelectedTime] = useState(next7Days[0]?.date);
  const [notes, setNotes] = useState('');
  const { user } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    getDays();
    getTime();
  }, [])

  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, 'days')
      nextSevenDays.push({
        date: date,
        day: date.format('ddd'), // Mon Tue
        formmatedDate: date.format('Do MMM') // 1 Jan
      })
    }
    setNext7Days(nextSevenDays)
  }
  // console.log("Next 7 days = ", next7Days)


  const getTime = () => {
    const timeList = [];
    for (let i = 7; i <= 11; i++) {
      timeList.push({
        time: i + ":00 AM"
      })
      timeList.push({
        time: i + ":30 AM"
      })
    }

    for (let i = 1; i <= 5; i++) {
      timeList.push({
        time: i + ":00 PM"
      })
      timeList.push({
        time: i + ":30 PM"
      })
    }
    setTimeList(timeList)
  }
  // console.log("timeList = ", timeList)

  // send data to backend
  const handleBookAppointement = () => {

    // Perform validation
    if (!selectedDate || !selectedTime || !hospital.id || !notes) {
      Alert.alert('Error', 'Please fill in all the required fields.');
      return;
    }

    setIsSubmitting(true)
    const data = {
      data: {
        UserName: user.fullName,
        Email: user.primaryEmailAddress.emailAddress,
        Date: selectedDate,
        Time: selectedTime,
        hospital: hospital.id,
        Note: notes,
      }
    };

    console.log('This Booked Appointement Data is sent to Strapi --> ', data)
    globalApi.createAppointement(data)
      .then(() => console.log('🟢 Booked Data sent Successfully'))
      .catch(error => console.log('🔴Error while seding data to backend = ', error))


    setIsSubmitting(false)
  }


  return (
    <View>
      <Text style={{ fontSize: 18, color: Colors.gray, marginBottom:10 }}>Book Appointement</Text>

      <SubHeading subHeadingTitle={'Day'} seeAll={false} />

      {/* Date */}
      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedDate(item.date)}
            style={[styles.dayButton, selectedDate == item.date ? { backgroundColor: Colors.primary } : null]}
          >
            <Text style={[{ fontFamily: 'appFont' }, selectedDate == item.date ? { color: Colors.white } : null]}
            >
              {item.day}
            </Text>
            <Text style={[{ fontFamily: 'appFont-semibold' }, selectedDate == item.date ? { color: Colors.white } : null]}
            >
              {item.formmatedDate}
            </Text>
          </TouchableOpacity>
        )}
      />

      <SubHeading subHeadingTitle={'Time'} seeAll={false} />

      {/* time */}
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedTime(item.time)}
            style={[styles.dayButton, {
              paddingVertical: 16
            }, selectedTime == item.time ? { backgroundColor: Colors.primary } : null]}
          >
            <Text style={[{ fontFamily: 'appFont-semibold' }, selectedTime == item.time ? { color: Colors.white } : null]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />


      <SubHeading subHeadingTitle={'Note'} seeAll={false} />

      {/* notes */}
      <TextInput
        onChangeText={(val) => setNotes(val)}
        numberOfLines={3}
        placeholder='Write Note Here'
        style={{ backgroundColor: Colors.ligh_gray, padding: 10, borderRadius: 10, borderColor: Colors.secondary, borderWidth: 1 }}
      />

      {/* Make appointement Btn */}
      <TouchableOpacity
        onPress={handleBookAppointement}
        disabled={isSubmitting}
        style={{ backgroundColor: Colors.primary, borderRadius: 99, padding: 13, margin: 10, left: 0, right: 0, marginBottom: 10, zIndex: 20, }}
      >
        <Text style={{ fontSize: 20, textAlign: 'center', color: Colors.white, fontFamily: 'appFont-semibold', fontSize: 17 }}>
          {isSubmitting ? 'Submitting...' : 'Make Appointment'}
        </Text>
      </TouchableOpacity>


    </View>
  );
}


const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginRight: 10,
    borderColor: Colors.gray
  },
})

export default BookingSection;
