import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../assets/shared/Colors'

const HospitalDoctorTab = ({ activeTab }) => {

    const [activeInd, setActiveInd] = useState(0);


    return (
        <View style={{ marginTop: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => { setActiveInd(0); activeTab('Hospital') }}
                    style={[activeInd == 0 ? styles.activeTab : styles.inActiveTab]}
                >
                    <Text style={[
                        activeInd == 0 ? styles.activeText : styles.inActiveText]}
                    >
                        Hospital
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { setActiveInd(1); activeTab('Doctor') }}
                    style={[activeInd == 1 ? styles.activeTab : styles.inActiveTab]}
                >
                    <Text style={[
                        activeInd == 1 ? styles.activeText : styles.inActiveText]}
                    >
                        Doctors
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    activeText: {
        textAlign: 'center',
        fontFamily: 'appFont',
        fontSize: 18,
        color: Colors.primary
    },
    inActiveText: {
        textAlign: 'center',
        fontFamily: 'appFont',
        fontSize: 18,
        color: Colors.gray
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
        padding: 3,
    },
    inActiveTab: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        padding: 3,
    }
})



export default HospitalDoctorTab;
