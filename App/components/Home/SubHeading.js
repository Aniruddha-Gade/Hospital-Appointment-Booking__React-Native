import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../assets/shared/Colors';

const SubHeading = ({ subHeadingTitle, seeAll = true }) => {
    return (
        <View
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}
        >
            <Text style={{ fontSize: 20, fontFamily: 'appFont-semibold' }}>
                {subHeadingTitle}
            </Text>

            {seeAll &&
                <Text style={{ fontFamily: 'appFont', color: Colors.primary }}>
                    See All
                </Text>}
        </View>
    );
}

export default SubHeading;
