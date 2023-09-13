import React from 'react'

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Images } from '../../../assets/images/images'
import { SizedBox } from '../components/SizedBox'

export const AppScreen = ({ title, children, childrenStyle, onPressBack, rightComponent, customTitle }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {onPressBack && (
          <TouchableOpacity onPress={onPressBack}>
            <Image resizeMode='contain' style={styles.leftIcon} source={Images.iconLeft} />
          </TouchableOpacity>
        )}
        <SizedBox width={24} />
        {customTitle ? customTitle : <Text style={styles.title}>{title}</Text>}
        <SizedBox width={16} />
        {rightComponent}
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
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  leftIcon: {
    height: 16,
    width: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },
})
