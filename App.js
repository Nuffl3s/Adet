import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loadup from './Components/Loadup';
import Landing from './Components/Landing';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loadup"
        screenOptions={{
          animation: 'default',
          headerShown: false,
        }}>
        <Stack.Screen name="Loadup" component={Loadup} />
        <Stack.Screen name="Landing" component={Landing} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;