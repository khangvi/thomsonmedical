import React from 'react'

import { View, StyleSheet } from 'react-native'

import { SizedBox } from '../../../common/components/SizedBox'
import { ContainerStyle } from '../../../common/styles'

export const MedicationInfoRow = ({ leftComponent, text, rightComponent, style }) => {
  return (
    <View style={[ContainerStyle.row, styles.container, style]}>
      {leftComponent}
      <SizedBox width={12} />
      {text}
      <View style={{ flex: 1 }} />
      {rightComponent}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
  },
})
