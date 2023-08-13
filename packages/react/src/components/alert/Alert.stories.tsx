import type { AlertProps } from '@/components/alert'
import type { Meta, StoryFn } from '@storybook/react'

import { alert } from '@giantnodes/theme'

import { Alert } from '@/components/alert'

const Component: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['brand', 'success', 'info', 'warning', 'danger'],
    },
  },
}

const defaultProps = {
  ...alert.defaultVariants,
}

export const Default: StoryFn = (args: AlertProps) => (
  <Alert {...args}>
    <Alert.Body>
      <Alert.Heading>There were 2 errors with your submission</Alert.Heading>
      <Alert.List>
        <Alert.Item>Your password must be at least 8 characters</Alert.Item>
        <Alert.Item>Your password must include at least one pro wrestling finishing move</Alert.Item>
      </Alert.List>
    </Alert.Body>
  </Alert>
)
Default.args = {
  ...defaultProps,
}

export default Component
