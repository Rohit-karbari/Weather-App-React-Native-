import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import React,{useState} from 'react'
import { Image ,Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { WeatherList } from './Container';
const SearchComp = ({route, navigation} : NativeStackScreenProps<WeatherList, 'SearchComp'>) => {
    const [input, setInput] = useState('')
    const [country, setCountry] = useState([])
    
    const handleClick = () => { 
        axios.get(`https://restcountries.com/v3.1/name/${input}`)
            .then((res) => {
                const result = res.data
                setCountry(result)
            })
            .catch((err) => {
                alert(err.message)
            })

            setTimeout (() => {
              navigation.navigate('CountryComp',{
                capital: capital,
                population: population,
                flag: flag[0],
                Longitude: Longitude,
                Latitude: Latitude
              })
            },1000)
           
    }

    const capital = country.map((ele : any) => ele.capital)
    const population = country.map((ele : any) => ele.population)
    const flag = country.map((ele : any) => ele.flags.png)
    const Longitude = country.map((ele : any) => ele.capitalInfo.latlng[0])
    const Latitude = country.map((ele : any) => ele.capitalInfo.latlng[1])

  return (
    <ScrollView>
        <View>
            <Text style={styles.heading}>WEATHER APP</Text>
        </View>
    <View style={styles.container}>
            <View style={styles.input}>
                <TextInput placeholder='Search Country' value={input} onChangeText={(data) => setInput(data)}/>
            </View>
            <View style={styles.button}>
                <Button disabled={input.length === 0} title='Submit' color='black' onPress={handleClick}></Button>
            </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    input : {
        borderRadius: 10,
        borderWidth: 2,
        padding: 8,
        margin: 8,
        width: 300,
        marginLeft: 30
        
      },
      button :{
        marginTop: 10,
        marginLeft: 125,
        borderWidth: 1,
        width: 100,
        borderRadius: 10,
        backgroundColor: "#B026FF",
      },
      container: {
        justifyContent: "center",
        paddingTop : 10,
        paddingLeft: 10,
        paddingRight: 30,
      },
      comp : {
        margin: 10,
        marginTop: 20,
        padding: 20,
        backgroundColor: 'lightblue'
      },
      heading : {
        fontSize: 30,
        margin: 40,
        textAlign: 'center',
        fontWeight: 'bold'
      }
     
})

export default SearchComp


