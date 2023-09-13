import React, { useCallback } from 'react'

import { FlatList } from 'react-native'

import { SizedBox } from '../../../common/components/SizedBox'
import { doctors } from '../data/doctors'

import { DoctorItem } from './DoctorItem'

export const DoctorList = () => {
  const _renderItem = useCallback(({ item }) => {
    return <DoctorItem data={item} />
  }, [])

  const _keyExtractor = item => item?.id

  return (
    <FlatList
      data={doctors}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      ItemSeparatorComponent={() => <SizedBox height={16} />}
      showsVerticalScrollIndicator={false}
    />
  )
}
