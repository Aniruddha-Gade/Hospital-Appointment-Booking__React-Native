import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View, Text, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


const Header = () => {

  const { isSignedIn, isLoaded, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 17, alignItems: 'center' }}>
        <Image source={{ uri: user.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }} />

        <View>
          <Text stye={{ fontFamily: 'appFont' }}>Hello, 👋</Text>
          <Text style={{ fontSize: 18, fontFamily: 'appFont-bold' }}>{user.fullName}</Text>
        </View>
      </View>

      <Ionicons name="notifications-outline" size={28} color="black" />


    </View>
  );
}

export default Header;
