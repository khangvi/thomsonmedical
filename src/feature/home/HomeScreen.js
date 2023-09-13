import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { AppButton } from '../../common/components/Button'
import { AppScreen } from '../../common/layouts/AppScreen'

export const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <AppScreen childrenStyle={{ flex: 1, justifyContent: 'center', backgroundColor: '' }} title='Home screen'>
      <AppButton
        onPress={() => {
          navigation.navigate('AppointmentVideoScreen')
        }}
        title='Appointment Video Screen'
        style={{ margin: 12 }}
      />
      <AppButton
        onPress={() => {
          navigation.navigate('DoctorsDirectoryScreen')
        }}
        title='Doctors Directory Screen'
        style={{ margin: 12 }}
      />
      <AppButton
        onPress={() => {
          navigation.navigate('MedicationDetailScreen')
        }}
        title='Medication Detail Screen'
        style={{ margin: 12 }}
      />
    </AppScreen>
  )
}
