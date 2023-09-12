import React from 'react'

import { View } from 'react-native'
export const SizedBox = ({ width = 1, height = 1 }) => {
  return <View style={{ width, height }} />
}
