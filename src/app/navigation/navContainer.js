import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppointmentVideoScreen } from '../../feature/appointment/screens/AppointmentVideoScreen'
import { DoctorsDirectoryScreen } from '../../feature/doctor/screens/DoctorsDirectoryScreen'
import { HomeScreen } from '../../feature/home/HomeScreen'
import { MedicationDetailScreen } from '../../feature/medication/screens/MedicationDetailScreen'

const StackNavigator = createNativeStackNavigator()

export const NavContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
          keyboardHandlingEnabled: true,
          animation: 'slide_from_right',
          fullScreenGestureEnabled: true,
        }}
        initialRouteName='HomeScreen'
      >
        <StackNavigator.Screen name='AppointmentVideoScreen' component={AppointmentVideoScreen} />
        <StackNavigator.Screen name='HomeScreen' component={HomeScreen} />
        <StackNavigator.Screen name='DoctorsDirectoryScreen' component={DoctorsDirectoryScreen} />
        <StackNavigator.Screen name='MedicationDetailScreen' component={MedicationDetailScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
