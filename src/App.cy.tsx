import { App } from './App'
import './styles.css'

it('Shows the app', () => {
  cy.mount(<App />)
})
