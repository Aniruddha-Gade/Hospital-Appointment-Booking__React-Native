import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PageHeader = ({ title }) => {

    const navigation = useNavigation();

    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={37} color="black" />
            </TouchableOpacity>

            <Text style={{ fontSize: 25, fontFamily: 'appFont-semibold' }}>{title}</Text>
        </View>
    );
}

export default PageHeader;
