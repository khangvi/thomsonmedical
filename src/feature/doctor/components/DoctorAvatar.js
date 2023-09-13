import React from 'react'

import { Image } from 'react-native'

export const DoctorAvatar = ({ imgSource, imgSize }) => {
  return <Image style={{ height: imgSize, width: imgSize, borderRadius: 12 }} source={imgSource} />
}
