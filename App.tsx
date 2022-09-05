import { StatusBar } from 'expo-status-bar';
import { Image ,Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import SearchComp from './Components/SearchComp';
import { SafeAreaProvider } from "react-native-safe-area-context";

import Container from './Components/Container';





export default function App() {
    return (
        <SafeAreaProvider>
        <NavigationContainer>
            <StatusBar style='auto' backgroundColor="lightblue" />
            <Container />
            </NavigationContainer>
     </SafeAreaProvider>
     
  );
}
