import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Info } from './Info'
import { Home } from './Home'
const { Navigator, Screen } = createNativeStackNavigator()

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const Root = () => {
  return (
    <Navigator>
      <Screen name={'Home'} component={Home} />
      <Screen name={'Info'} component={Info} />
    </Navigator>
  )
}
