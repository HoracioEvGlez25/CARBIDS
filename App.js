import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider, VStack, useColorModeValue } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from "./theme";
import ToggleDarkMode from "./TogleDarkMode";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/LoginScreen";
import Register from "./src/screens/RegisterScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import OffersScreen from "./src/screens/OffersScreen";
import SellScreen from "./src/screens/SellScreen";
import MisCarros from "./src/screens/MisCarros";
import MisFavoritos from "./src/screens/MisFavoritos";
import NotificationPreferences from "./src/screens/NotificationPreferences";
import LanguageOptions from "./src/screens/LanguageOptions";
import SecurityPrivacy from "./src/screens/SecurityPrivacy";
import PaymentMethods from "./src/screens/PaymentMethods";
import SupportHelp from "./src/screens/SupportHelp";
import AppCustomization from "./src/screens/AppCustomization";
import DetailsScreen from "./src/screens/DetailsScreen";
import ReunionScreen from "./src/screens/ReunionScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainTab = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: "blue",
        drawerInactiveTintColor: "black",
        drawerLabelStyle: { fontSize: 16 },
        headerShown: true,
        drawerStyle: {
          backgroundColor: useColorModeValue("#ffffff", "#1a1a1a"),
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mis Carros"
        component={MisCarros}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="car-sport-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mis Favoritos"
        component={MisFavoritos}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="pricetag-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sell"
        component={SellScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Ruta de Settings con Stack Navigator */}
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: "Configuraciones" }}
      />
      <Stack.Screen name="NotificationPreferences" component={NotificationPreferences} />
      <Stack.Screen name="LanguageOptions" component={LanguageOptions} />
      <Stack.Screen name="SecurityPrivacy" component={SecurityPrivacy} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="SupportHelp" component={SupportHelp} />
      <Stack.Screen name="AppCustomization" component={AppCustomization} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen
        name="ReunionScreen" 
        component={ReunionScreen}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <VStack flex={1} bg={useColorModeValue("light.background.50", "dark.background.900")}>
          <Box safeAreaTop bg={useColorModeValue("light.background.100", "dark.background.900")}>
            <ToggleDarkMode />
          </Box>
          <Stack.Navigator initialRouteName={isAuthenticated ? "MainTab" : "Login"}>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {() => <Login setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
              {() => <Register setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Reunion" component={ReunionScreen} />
          </Stack.Navigator>
        </VStack>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
