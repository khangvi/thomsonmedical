import React from 'react'

import { StyleSheet, Image } from 'react-native'

import { Images } from '../../../../assets/images/images'

export const LocalVideo = () => {
  return <Image source={Images.patientAvatarDefault} style={[styles.container, { right: 16 }]} />
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 104,
    height: 128,
    position: 'absolute',
    borderRadius: 12,
  },
})
