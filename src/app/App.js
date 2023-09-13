import 'react-native-reanimated'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavContainer } from './navigation/navContainer'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavContainer />
    </SafeAreaProvider>
  )
}

export default App
