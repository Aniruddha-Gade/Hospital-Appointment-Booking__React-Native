import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, TouchableOpacityBase } from 'react-native';
import globalApi from '../../../services/globalApi';
import Colors from '../../../assets/shared/Colors';
import SubHeading from './SubHeading';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const Categories = () => {

    const [categoryList, setCategoryList] = useState([]);
    const navigation = useNavigation()

    useEffect(() => {
        getCategories()
    }, [])


    const getCategories = () => {
        globalApi.getCategories().then(res => {
            // console.log("Categories Data = ", res.data.data)
            setCategoryList(res.data.data)
        })
            .catch(error => {
                console.log("Error while fetching categories = ", error)
            })
    }



    return (
        <View style={{ marginTop: 10 }}>

            <SubHeading subHeadingTitle={'Doctor Speciality'} />


            <FlatList
                data={categoryList}
                numColumns={4}
                columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
                style={{ marginTop: 5 }}
                renderItem={({ item, index }) => index < 4 && (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Hospital-doctor-list-screen',
                            {
                                categoryName: item.attributes.Name
                            })}
                        style={{ alignItems: 'center', }}
                    >
                        <View style={{ padding: 15, backgroundColor: Colors.secondary, borderRadius: 99 }}>
                            <Image
                                source={{ uri: item.attributes.Icon.data.attributes.url }}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                        <Text>
                            {item.attributes.Name}
                        </Text>
                    </TouchableOpacity>
                )}
            >
            </FlatList>

        </View>
    );
}

export default Categories;
