import React from 'react'

import { TextInput, StyleSheet, View } from 'react-native'

import { Images } from '../../../../assets/images/images'
import { AppIcon } from '../../../common/components/AppIcon'

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Dentists' />
      <AppIcon icSource={Images.iconSearch} icSize={16} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
})
