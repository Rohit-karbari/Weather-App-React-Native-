import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React  from 'react'
import SearchComp from './SearchComp';

import WeatherComp from './weatherComp';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryComp from './CountryComp';

export type WeatherList ={
    SearchComp : any;
     CountryComp : any;
    WeatherComp : any
    }

const Stack = createNativeStackNavigator<WeatherList>()

export default function Container() {
   
  return (
               <Stack.Navigator initialRouteName='SearchComp' 
                          screenOptions={{
                            headerStyle : {
                              backgroundColor : 'grey'
                            },
                            headerTintColor : 'black'
                            
                          }}>
                      <Stack.Screen name='SearchComp' component={SearchComp}  options={{title : 'Weather-App'}} />
                      <Stack.Screen name='CountryComp'  component={CountryComp} options={{title : 'country details'}} />
                       <Stack.Screen  name ='WeatherComp' component={WeatherComp} options={{title : 'Capital weather'}} />
               </Stack.Navigator>
          
       
       
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    paddingTop : 80,
    
    
  },
   text : {
    fontSize : 20,
    fontWeight : 'bold'
   }
   
});