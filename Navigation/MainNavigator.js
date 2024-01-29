import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useState } from 'react'

const MainNavigator = () => {

  const [idToken, setIdToken] = useState ("")
  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default MainNavigator