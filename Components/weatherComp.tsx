import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Image ,Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { WeatherList } from './Container';


const WeatherComp = ({route, navigation} : NativeStackScreenProps<WeatherList, 'WeatherComp'> ) => {
  return (
    <View>
        <Text style={styles.heading}>Weather Condition</Text>
        <Image style={styles.logo} source={{uri: route.params?.icon}}/>
        <Text>Temperature :- {route.params?.temperature}</Text>
        <Text>Wind_speed :-{route.params?.wind_speed}</Text>
        <Text>Precipitation:-{route.params?.precipitation}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 30,
        height: 30
        
    },
    heading: {
        fontSize: 30,
       margin: 10,
       textAlign: 'center',
       fontWeight: 'bold'
      }
})
export default WeatherComp