import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons';
import Colors from '../../../assets/shared/Colors';



const SearchBar = ({setSearchText}) => {

    const [searchInput, setSearchInput] = useState();

    return (
        <View style={{ marginTop: 15 }}>
            <View style={{ dislay: 'felx', flexDirection: 'row', alignItems: 'center', gap: 14, borderWidth: 0.8, borderColor: Colors.gray, padding: 8, borderRadius: 30 }}>
                <AntDesign name="search1" size={24} color={Colors.primary} />
                <TextInput
                    placeholder='Search'
                    onChangeText={(value) => setSearchInput(value)}
                    onSubmitEditing={()=> setSearchText(searchInput)}
                    style={{ width: '100%',fontFamily:'appFont' }}
                />
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})