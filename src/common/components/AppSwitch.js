import React, { useState } from 'react'

import { MotiView } from 'moti'
import { StyleSheet, TouchableOpacity } from 'react-native'

export const AppSwitch = () => {
  const [value, setValue] = useState(false)

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        setValue(!value)
      }}
      style={styles.container}
    >
      <MotiView
        from={{ translateX: 0 }}
        animate={{
          translateX: value ? 16 : 0,
        }}
        ransition={{
          duration: 100,
          type: 'timing',
        }}
        style={styles.not}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderColor: 'rgb(26, 44, 72)',
    borderWidth: 1,
    borderRadius: 12,
    minWidth: 42,
  },
  not: {
    height: 14,
    width: 14,
    backgroundColor: 'rgb(26, 44, 72)',
    borderRadius: 90,
  },
})
