import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import { useAuth } from '@clerk/clerk-expo'
import Header from '../components/Home/Header'
import SearchBar from '../components/Home/SearchBar'
import Slider from '../components/Home/Slider'
import Categories from '../components/Home/Categories'
import PremiumHospital from '../components/Home/PremiumHospital'


const Home = () => {
  const { isLoaded, signOut } = useAuth();
  const [searchText, setSearchText] = useState()

  console.log('searchText == ', searchText)







  return (
    <ScrollView style={{ padding: 20, marginTop: 25 }}>

      <Header />
      <SearchBar setSearchText={setSearchText} />
      <Slider />
      <Categories />
      <PremiumHospital />







      {/* <Button title='SignOut'
        onPress={() => signOut()}
      >

      </Button> */}



    </ScrollView>
  )
}

export default Home
