import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Info } from './Info'
import { Home } from './Home'
const { Navigator, Screen } = createNativeStackNavigator()

it('navigates screen to screen', () => {
  cy.mount(
    <NavigationContainer>
      <Navigator>
        <Screen name={'Home'} component={Home} />
        <Screen name={'Info'} component={Info} />
      </Navigator>
    </NavigationContainer>,
  )
  cy.contains('[role=button]', 'Navigate to Info').click()
  cy.contains('[role=button]', 'Navigate to Home').click()
  cy.contains('[role=button]', 'Navigate to Info').should('be.visible')
})
