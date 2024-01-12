import React, { useState } from 'react';
import { View, Text, Image, FlatList,  TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useUser, useAuth } from '@clerk/clerk-expo';
import Colors from '../../assets/shared/Colors';
import { MaterialIcons } from '@expo/vector-icons';



const Profile = () => {

  const { user } = useUser();
  // console.log('user = ', user)
  const { signOut } = useAuth();

  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    signOut();
  };

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

      <Text style={{ fontSize: 25, fontFamily: 'appFont-semibold', textAlign: 'center' }}>My Profile</Text>


      {/* profile image */}
      <View style={{ marginTop: 10 }}>
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: 'column', gap: 20, alignItems: 'center' }}>
            <View style={{ position: 'relative' }}>
              <Image
                source={{ uri: userImageUrl }}
                style={{ width: 100, height: 100, borderRadius: 99, objectFit: 'contain' }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute', bottom: 0, right: 0, backgroundColor: Colors.primary, borderRadius: 99, padding: 5,
                }}
              >
                <MaterialIcons name="mode-edit" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <Text style={{ fontSize: 15, fontFamily: 'appFont-semibold' }}>{userFulName}</Text>
              <Text style={{ fontSize: 15, fontFamily: 'appFont-semibold', color: Colors.gray }}>+91 8097493474</Text>
              <Text style={{ fontSize: 15, fontFamily: 'appFont', color: Colors.gray }}>
                {userEmail}
              </Text>
            </View>
          </View>
        </View>



        <FlatList
          data={categoryList}
          // style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
              <View style={styles.iconTextContainer}>
                <View style={{ padding: 9, backgroundColor: Colors.secondary, borderRadius: 10 }}>
                  <MaterialIcons name={item.icon} size={25} color={Colors.primary} />
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'appFont', }}>
                  {item.title}
                </Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </TouchableOpacity>
          )}
        />

        {/* Log out btn */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ marginTop: 35 }}>
          <View style={styles.iconTextContainer}>
            <View style={{ padding: 9, backgroundColor: Colors.secondary, borderRadius: 10 }}>
              <MaterialIcons name="logout" size={24} color="red" />
            </View>
            <Text style={{ fontSize: 20, fontFamily: 'appFont', }}>
              Log out
            </Text>

          </View>
        </TouchableOpacity>


        {/* logout modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are you sure you want to log out?</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.modalButton, { backgroundColor: 'red' }]} onPress={handleLogout}>
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, { backgroundColor: 'green' }]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>


      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  iconTextContainer: {
    display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center'
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'appFont',
  },
})

export default Profile;
