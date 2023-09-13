import React from 'react'

import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export const AppButton = ({ title = 'button', style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: '#1A2C48',
    paddingVertical: 16,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
})
