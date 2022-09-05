import React,{useState} from 'react'
import { Image ,Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WeatherList } from './Container';



const CountryComp = ({route, navigation} : NativeStackScreenProps<WeatherList,'CountryComp'> ) => {



    // const [weather, setWeather] = useState({
    //         temperature: '',
    //         wind_speed: '',
    //         precipitation: '',
    //         icon: 'loading...',
    //         name:''

    // })

    const handleTemp = (data : any)=>{
      console.log(data)
        axios.get(`http://api.weatherstack.com/current?access_key=8d8faefa3c032df7735a2cf3db52a467&query=${data}`)
          .then((res) => {
            const result = res.data
            // setWeather({
            //   name: result.location.name,
            //   temperature: result.current.temperature,
            //   wind_speed: result.current.wind_speed,
            //   precipitation: result.current.precip,
            //   icon: result.current.weather_icons[0]
            // })

            navigation.navigate('WeatherComp',{
              temperature: result.current.temperature,
              wind_speed: result.current.wind_speed,
              precipitation: result.current.precip,
              icon: result.current.icon
            })

        })
          .catch((err) => {
            alert(err.message)
          })

          // navigation.navigate('WeatherComp',{
          //   temperature: weather.temperature,
          //   wind_speed: weather.wind_speed,
          //   precipitation: weather.precipitation,
          //   icon: weather.icon
          // })
    }   
    
  return (
    <ScrollView>
    <View style={styles.Container}>
        <Text style={styles.heading}>Country Details</Text>
        <View>
            <Image style={styles.logo} source={{uri: route.params?.flag}}/>
        </View>
        <View >
            <View style={styles.words}>
            <Text>Capital - {route.params?.capital[0]}</Text>
            <Text>Total Population - {route.params?.population}</Text>
            <Text>Lat :- {route.params?.Longitude}</Text>
            <Text>Lat :- {route.params?.Latitude}</Text>
            </View>
            <View style={styles.capital}>
                <Button title='Capital Weather' onPress={() => handleTemp(route.params?.capital[0])}></Button>
            </View>
        </View>
    </View>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
    logo :{
        margin : 20,
         padding : 15,
        width : 200,
        height : 100
      },
      capital : {
        borderWidth : 1,
         width : 200,
        margin: 10,
        backgroundColor: 'orange'
      },
      words : {
        margin: 10,
        fontSize: 30,
        fontStyle: 'italic',
       },
       heading: {
         fontSize: 30,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold'
       },
       Container: {
        backgroundColor: 'lightblue'
       }
       
      
})  

export default CountryComp