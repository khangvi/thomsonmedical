import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppointmentVideoScreen } from '../../feature/appointment/screens/AppointmentVideoScreen'

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
      >
        <StackNavigator.Screen name='AppointmentVideoScreen' component={AppointmentVideoScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
