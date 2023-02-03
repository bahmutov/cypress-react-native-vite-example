import { NavigationContainer } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { center, text } from './styles'
import { Info } from './Info'

it('shows just text', () => {
  cy.mount(<Text>Home</Text>)
})

it('shows view with text', () => {
  cy.mount(
    <View style={center}>
      <Text>Home</Text>
    </View>,
  )
})

it('shows styles', () => {
  cy.mount(
    <View style={center}>
      <Text style={text}>Home</Text>
    </View>,
  )
})

it('clicks the button', () => {
  cy.mount(
    <View style={center}>
      <Text style={text}>Home</Text>
      <Button
        title="Navigate to Info"
        onPress={cy.stub().as('press')}
        testID="ToHome"
      />
    </View>,
  )
  cy.contains('Navigate to Info').click()
  cy.get('@press').should('have.been.calledOnce')
})

it('shows Info', () => {
  cy.mount(
    <NavigationContainer>
      <Info />
    </NavigationContainer>,
  )
})

export {}
