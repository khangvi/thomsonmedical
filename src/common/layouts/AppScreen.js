import React from 'react'

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Images } from '../../../assets/images/images'
import { SizedBox } from '../components/SizedBox'

export const AppScreen = ({ title, children, childrenStyle, onPressBack }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SizedBox width={24} />
        <TouchableOpacity onPress={onPressBack}>
          <Image resizeMode='contain' style={styles.leftIcon} source={Images.iconLeftArrow} />
        </TouchableOpacity>
        <SizedBox width={24} />
        <Text>{title}</Text>
      </View>
      <View style={childrenStyle}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  leftIcon: {
    height: 16,
    width: 16,
  },
})
