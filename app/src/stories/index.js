import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-router'
import { Welcome } from '@storybook/react/demo'
import { MemoryRouter } from 'react-router-dom'

import Navigation from '../components/Navigation'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Navigation')} />
))

storiesOf('Navigation', module)
  .addDecorator(
    StoryRouter({
      '/about': linkTo('Welcome')
    })
  )
  .add('Basic', () => <Navigation onClick={action('clicked')} />)
