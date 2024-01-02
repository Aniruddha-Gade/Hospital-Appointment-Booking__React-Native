import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";

import Login from "./App/screens/Login";




export default function App() {

  const [fontsLoaded] = useFonts({
    'appFont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appFont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appFont-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });


  if (!fontsLoaded) {
    console.log('Fonts not loaded 🔴')
    return null;
  } else {
    console.log("Font Loaded 🟢")
  }



  return (
    <ClerkProvider
      publishableKey={process.env.CLERK_PUBLISHABLE_KEY}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        {/* signin */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>

        </SignedIn>

        {/* signout */}
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
