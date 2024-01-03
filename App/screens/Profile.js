import React, { useEffect } from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useUser, useAuth } from '@clerk/clerk-expo';
import PageHeader from '../components/shared/PageHeader';
import Colors from '../../assets/shared/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Profile = () => {

  const { user } = useUser();
  // console.log('user = ', user)
  const { signOut } = useAuth();

  const userEmail = user.primaryEmailAddress.emailAddress
  const userImageUrl = user.imageUrl
  const userFulName = user.fullName
  // console.log('email = ', userEmail)


  const categoryList = [
    {
      id: 0,
      icon: 'perm-contact-calendar',
      title: 'Appointement'
    },
    {
      id: 1,
      icon: 'payment',
      title: 'Payment'
    },
    {
      id: 2,
      icon: 'folder-shared',
      title: 'Tell Your Friend'
    },
    {
      id: 3,
      icon: 'laptop-chromebook',
      title: 'Promotions'
    },
    {
      id: 4,
      icon: 'settings',
      title: 'Settings'
    },
  ]

  return (
    <View style={{ padding: 20 }}>


      <View style={[styles.iconTextContainer, { justifyContent: 'space-between' }]}>
        <Text style={{ fontSize: 25, fontFamily: 'appFont-semibold' }}>My Profile</Text>
        <MaterialIcons name="mode-edit" size={24} color="black" />
      </View>

      {/* profile image */}
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <Image
            source={{ uri: userImageUrl }}
            style={{ width: 70, height: 70, borderRadius: 99, objectFit: 'contain' }}
          />
          <View>

            <Text style={{ fontSize: 15, fontFamily: 'appFont-semibold' }}>{userFulName}</Text>
            <Text style={{ fontSize: 15, fontFamily: 'appFont-semibold', color: Colors.gray }}>Engineer</Text>
          </View>
        </View>

        <View style={{ marginTop: 10, gap: 5 }}>
          {/* mobile number */}
          <View style={styles.iconTextContainer}>
            <FontAwesome name="phone" size={20} color='black' />
            <Text style={{ fontSize: 15, fontFamily: 'appFont', color: Colors.gray }}>
              +91 8879963170
            </Text>
          </View>
          {/* email address */}
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="email" size={20} color='black' />
            <Text style={{ fontSize: 15, fontFamily: 'appFont', color: Colors.gray }}>
              {userEmail}
            </Text>
          </View>

        </View>

        <FlatList
          data={categoryList}
          // style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', marginTop: 30 }}>
              <MaterialIcons name={item.icon} size={25} color={Colors.primary} />
              <Text style={{ fontSize: 20, fontFamily: 'appFont', }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* Log out btn */}
        <TouchableOpacity
          onPress={() => signOut()}
          style={{ marginTop: 35 }}>
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="logout" size={24} color="red" />
            <Text style={{ fontSize: 20, fontFamily: 'appFont', }}>
              Log out
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  iconTextContainer: {
    display: 'flex', flexDirection: 'row', gap: 9, alignItems: 'center'
  }
})

export default Profile;
