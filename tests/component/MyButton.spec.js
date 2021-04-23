import { vmount } from './test-utils'
import MyButton from '@/components/MyButton'

it('MyButton', () => {
  vmount(MyButton)
  cy.get('.v-btn').contains('Click Me').click()
})
