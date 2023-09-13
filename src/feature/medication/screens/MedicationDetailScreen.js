import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Image, StyleSheet, Text, View } from 'react-native'

import { Images } from '../../../../assets/images/images'
import { AppSwitch } from '../../../common/components/AppSwitch'
import { AppButton } from '../../../common/components/Button'
import { SizedBox } from '../../../common/components/SizedBox'
import { AppScreen } from '../../../common/layouts/AppScreen'
import { MedicationInfoRow } from '../components/MedicationInfoRow'

export const MedicationDetailScreen = () => {
  const navigation = useNavigation()

  return (
    <AppScreen childrenStyle={styles.contentContainer} onPressBack={navigation.goBack}>
      <SizedBox height={36} />
      <Image resizeMode='contain' style={styles.logo} source={Images.logoVitaminC} />
      <SizedBox height={16} />
      <Text style={styles.medicationName}>Vitamin C</Text>
      <SizedBox height={36} />
      <MedicationInfoRow
        leftComponent={<Image resizeMode='contain' style={{ height: 14, width: 14 }} source={Images.iconBell} />}
        text={<Text style={styles.txt}>Everyday at 9:00</Text>}
        rightComponent={<AppSwitch />}
      />
      <SizedBox height={16} />
      <MedicationInfoRow
        leftComponent={<View style={{ height: 14, width: 14, backgroundColor: 'red', borderRadius: 90 }} />}
        text={<Text style={styles.txt}>Before meal</Text>}
      />
      <SizedBox height={16} />
      <MedicationInfoRow
        style={{ paddingVertical: 8, paddingRight: 8 }}
        leftComponent={<Image resizeMode='contain' style={{ height: 14, width: 14 }} source={Images.iconCalendar} />}
        text={<Text style={[styles.txt, styles.txtBold]}>Finish course</Text>}
        rightComponent={
          <View style={{ padding: 12, backgroundColor: '#d9dbe0', borderRadius: 12 }}>
            <Text style={[styles.txt, styles.txtBold]}>Aug 23</Text>
          </View>
        }
      />
      <View style={{ flex: 1 }} />
      <AppButton style={{ width: '98%' }} title='Request refill' />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    flex: 1,
  },
  logo: {
    height: 104,
    width: 104,
  },
  medicationName: {
    color: '#1a2c48ff',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '600',
  },
  txt: {
    color: '#1a2c48ff',
    fontSize: 14,
    lineHeight: 18,
  },
  txtBold: {
    fontWeight: '700',
  },
})
