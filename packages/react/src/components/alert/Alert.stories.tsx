import type { Meta, StoryFn } from '@storybook/react'
import { alert } from '@giantnodes/theme'

import type { AlertProps } from '~/components/alert'
import { Alert } from '~/components'

const Component: Meta<typeof Alert.Root> = {
  title: 'Components/Alert',
  component: Alert.Root,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'success', 'info', 'warning', 'danger'],
    },
  },
}

const defaultProps = {
  ...alert.defaultVariants,
}

export const Default: StoryFn<AlertProps> = (args) => (
  <Alert.Root {...args}>
    <Alert.Body>
      <Alert.Heading>There were 2 errors with your submission</Alert.Heading>
      <Alert.List>
        <Alert.Item>Your password must be at least 8 characters</Alert.Item>
        <Alert.Item>Your password must include at least one pro wrestling finishing move</Alert.Item>
      </Alert.List>
    </Alert.Body>
  </Alert.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
