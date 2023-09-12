import React from 'react'

import { Image, StyleSheet, TouchableOpacity } from 'react-native'

export const IconWithBackground = ({
  imgSrc,
  iconSize = 16,
  bgPadding = 16,
  bgColor = 'white',
  bgSize = 48,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { padding: bgPadding, backgroundColor: bgColor, height: bgSize, width: bgSize }]}
    >
      <Image resizeMode='contain' style={{ height: iconSize, width: iconSize }} source={imgSrc} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
