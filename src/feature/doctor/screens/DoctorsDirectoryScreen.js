import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Images } from '../../../../assets/images/images'
import { SizedBox } from '../../../common/components/SizedBox'
import { AppScreen } from '../../../common/layouts/AppScreen'
import { DoctorAvatar } from '../components/DoctorAvatar'
import { DoctorList } from '../components/DoctorList'
import { SearchInput } from '../components/SearchInput'

export const DoctorsDirectoryScreen = () => {
  const navigation = useNavigation()

  return (
    <AppScreen
      onPressBack={navigation.goBack}
      rightComponent={<DoctorAvatar imgSource={Images.patientAvatarDefault} imgSize={32} />}
      customTitle={<SearchInput />}
      childrenStyle={{ paddingHorizontal: 16 }}
    >
      <SizedBox height={36} />
      <DoctorList />
    </AppScreen>
  )
}
