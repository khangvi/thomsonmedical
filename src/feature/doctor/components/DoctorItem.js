import React from 'react'

import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

import { Images } from '../../../../assets/images/images'
import { AppIcon } from '../../../common/components/AppIcon'
import { SizedBox } from '../../../common/components/SizedBox'

import { DoctorAvatar } from './DoctorAvatar'

export const DoctorItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <DoctorAvatar imgSource={data?.avatar} imgSize={48} />
      <SizedBox width={16} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{data?.name}</Text>
        <SizedBox height={8} />
        <Text style={styles.title}>{data?.title}</Text>
      </View>
      <AppIcon icSize={16} icSource={Images.iconRight} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#1a2c48ff',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  title: {
    color: '#737885ff',
    fontSize: 12,
  },
})
