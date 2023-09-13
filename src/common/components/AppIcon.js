import React from 'react'

import { Image, TouchableOpacity } from 'react-native'

export const AppIcon = ({ icSource, icSize }) => {
  return (
    <TouchableOpacity>
      <Image resizeMode='contain' style={{ height: icSize, width: icSize }} source={icSource} />
    </TouchableOpacity>
  )
}
