import { NavigationContainer } from '@react-navigation/native'
import { Info } from './Info'

it('shows Info', () => {
  cy.mount(
    <NavigationContainer>
      <Info />
    </NavigationContainer>,
  )
  cy.contains('Navigate to Home')
})

export {}
