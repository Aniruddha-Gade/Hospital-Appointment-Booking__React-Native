import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import HospitalDoctorListScreen from '../components/Home/HospitalDoctorListScreen';
import Home from '../screens/Home';
import HospitalDetails from '../screens/HospitalDetails';
import BookAppointement from '../screens/BookAppointement';


const HomeNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}

        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Hospital-doctor-list-screen' component={HospitalDoctorListScreen} />
            <Stack.Screen name='hospital-details' component={HospitalDetails} />
            <Stack.Screen name='book-appointement' component={BookAppointement} />
        </Stack.Navigator>
    );
}

export default HomeNavigation;
