import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import homeImage from '../../assets/images/imgage.png'
import Colors from '../../assets/shared/Colors';
import SignInWithOAuth from '../components/SignInWithOAuth';

const Login = () => {
    return (
        <View style={{ alignItems: 'center', backgroundColor: Colors.ligh_gray }}>

            <Image
                source={homeImage}
                style={styles.appImage}
            />

            <View style={{
                backgroundColor: Colors.white, padding: 25, alignItems: 'center', marginTop: -50,
                borderTopLeftRadius: 20, borderTopRightRadius: 20
            }}>
                <Text style={styles.heading}>Your Ultimate Doctor</Text>
                <Text style={styles.heading}>Booking App</Text>
                <Text style={{ marginTop: 20, textAlign: 'center' }}>
                    Book Appointements Effortlessly and manage your health journey
                </Text>

                {/* sign in button */}
                <SignInWithOAuth />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appImage: {
        width: 300,
        height: 500,
        objectFit: 'cover',
        marginTop: 50,
        borderRadius: 20,
        borderWidth: 6,
        borderColor: '#000'
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold'
    }
})

export default Login;