import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Colors from '../../../assets/shared/Colors';
import SubHeading from '../../components/Home/SubHeading';
import moment from 'moment'


const BookingSection = () => {

  const [next7Days, setNext7Days] = useState([])
  const [selectedDate, setSelectedDate] = useState(next7Days[0]?.date);
  const [timeList, setTimeList] = useState([])
  const [selectedTime, setSelectedTime] = useState(next7Days[0]?.date);

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
  console.log("timeList = ", timeList)


  return (
    <View>
      <Text style={{ fontSize: 18, color: Colors.gray }}>Book Appointement</Text>

      <SubHeading subHeadingTitle={'Day'} seeAll={false} />

      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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


      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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

      <TextInput
        numberOfLines={3}
        placeholder='Write Note Here'
        style={{ backgroundColor: Colors.ligh_gray, padding: 10, borderRadius: 10, borderColor: Colors.secondary, borderWidth: 1 }}
      />

      <TouchableOpacity

        style={{ backgroundColor: Colors.primary, borderRadius: 99, padding: 13, margin: 10, left: 0, right: 0, marginBottom: 10, zIndex: 20, }}
      >
        <Text style={{ fontSize: 20, textAlign: 'center', color: Colors.white, fontFamily: 'appFont-semibold', fontSize: 17 }}>
          Make Appointement
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
