import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Image ,Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { WeatherList } from './Container';


const WeatherComp = ({route, navigation} : NativeStackScreenProps<WeatherList, 'WeatherComp'> ) => {
  return (
    <View style={styles.wether}>
        <Text style={styles.heading}>Weather Condition</Text>
        <View style= {styles.css}>
        <Image style={styles.logo} source={{uri: route.params?.icon}}/>
        <Text>Temperature :- {route.params?.temperature}</Text>
        <Text>Wind_speed :-{route.params?.wind_speed}</Text>
        <Text>Precipitation:-{route.params?.precipitation}</Text>
        </View>
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
      },
      wether: {
        margin : 40,
        backgroundColor: 'lightblue'
      },
      css: {
        margin : 20
      }
})
export default WeatherComp