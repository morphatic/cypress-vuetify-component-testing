import { mount } from '@cypress/vue'
import vuetify from '@/plugins/vuetify'
import App from './App'

export const vmount = (component, options) => mount(App, { slots: { default: component }, vuetify, ...options })
