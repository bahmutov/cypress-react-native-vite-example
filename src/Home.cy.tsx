import { NavigationContainer } from '@react-navigation/native'
import { Home } from './Home'

it('shows Home', () => {
  cy.mount(
    <NavigationContainer>
      <Home />
    </NavigationContainer>,
  )
  cy.contains('[data-testid=ToInfo]', 'Navigate to Info')
})
