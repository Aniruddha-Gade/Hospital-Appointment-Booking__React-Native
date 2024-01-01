import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Colors from '../../../assets/shared/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




const DoctorCardItem = ({ doctor }) => {

    // console.log("doctor = ", doctor)

    return (
        <View style={styles.cardContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                <Image
                    source={{ uri: doctor.attributes.Image.data.attributes.formats.thumbnail.url }}
                    style={{ width: 120, height: 150, objectFit: 'contain', borderRadius: 15 }}
                />

                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <View style={styles.headingContainer}>
                            <MaterialIcons name="verified" size={20} color={Colors.primary} />
                            <Text style={{ color: Colors.primary, fontFamily: 'appFont-semibold', fontSize: 15 }}>
                                Proffesional Doctor
                            </Text>
                        </View>

                        <FontAwesome name="heart" size={24} color={Colors.primary} />
                    </View>

                    {/* doctor name - category - Year_of_Experience  */}
                    <View>
                        <Text style={styles.doctorName}>
                            Dr. {doctor.attributes.Name}
                        </Text>
                        <Text style={styles.categoryName}>
                            {doctor.attributes.categories.data[0].attributes.Name}
                        </Text>
                        <Text style={[styles.categoryName, { color: Colors.primary }]}>
                            {doctor.attributes.Year_of_Experience} Years
                        </Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <Text style={{ fontFamily: 'appFont-semibold' }}>⭐⭐⭐⭐ 4.8 </Text>
                        <Text style={{ color: Colors.gray }}>49 Reviews</Text>
                    </View>
                </View>

            </View>

            {/* make appointement button */}
            <TouchableOpacity style={styles.makeAppointementContainer}>
                <Text style={{ color: Colors.primary, fontFamily: 'appFont-semibold', fontSize: 15 }}>
                    Book Appointement
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    doctorName: {
        fontSize: 16, fontFamily: 'appFont-bold'
    },
    categoryName: {
        fontSize: 16, fontFamily: 'appFont', color: Colors.gray
    },
    makeAppointementContainer: {
        backgroundColor: Colors.secondary, padding: 10, borderRadius: 9, alignItems: 'center'
    },
    headingContainer: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.secondary, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 99, gap: 5
    },
    cardContainer: {
        backgroundColor: Colors.white, borderRadius: 20, padding: 12, gap: 10
    }

})


export default DoctorCardItem;
