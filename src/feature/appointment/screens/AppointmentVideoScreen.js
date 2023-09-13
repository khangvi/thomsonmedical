import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import { Images } from '../../../../assets/images/images'
import { SizedBox } from '../../../common/components/SizedBox'
import { AppScreen } from '../../../common/layouts/AppScreen'
import { ContainerStyle } from '../../../common/styles'
import { IconWithBackground } from '../components/IconWithBackground'
import { LocalVideo } from '../components/LocalVideo'

export const AppointmentVideoScreen = () => {
  const navigation = useNavigation()

  return (
    <ImageBackground resizeMode='cover' style={styles.container} source={Images.doctorAvatarDefault}>
      <AppScreen scrollEnabled={false} onPressBack={navigation.goBack} childrenStyle={styles.contentContainer}>
        <LocalVideo />
        <View style={styles.flexBox} />
        <Text style={styles.doctorName}>Dr. Phil</Text>
        <SizedBox height={16} />
        <Text style={styles.time}>00:19:21</Text>
        <SizedBox height={48} />
        <View style={ContainerStyle.row}>
          <IconWithBackground bgColor={'#FAFAFA66'} imgSrc={Images.iconRecord} iconSize={16} />
          <SizedBox width={24} />
          <IconWithBackground
            onPress={navigation.goBack}
            bgColor={'#EE574A'}
            imgSrc={Images.iconDial}
            iconSize={32}
            bgSize={72}
          />
          <SizedBox width={24} />
          <IconWithBackground bgColor={'#FAFAFA66'} imgSrc={Images.iconVideo} iconSize={16} />
        </View>
      </AppScreen>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  flexBox: {
    flex: 1,
  },
  doctorName: {
    fontSize: 24,
    color: '#fafafaff',
    fontWeight: '700',
  },
  time: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
})
