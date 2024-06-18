import type { FormProps } from '@/components/form'
import type { Meta, StoryFn } from '@storybook/react'

import { form } from '@giantnodes/theme'

import { Form, Input } from '@/components'

const Component: Meta<typeof Form.Root> = {
  title: 'Components/Form',
  component: Form.Root,
  argTypes: {},
}

const defaultProps = {
  ...form.defaultVariants,
}

export const Default: StoryFn<FormProps> = (args) => (
  <Form.Root {...args}>
    <Form.Group name="email-address">
      <Form.Label>Email address</Form.Label>
      <Input.Group>
        <Input.Addon>$</Input.Addon>
        <Input.Root placeholder="Username" type="text" />
        <Input.Addon>USD</Input.Addon>
      </Input.Group>

      <Form.Caption>A unique string of characters that identifies an email account</Form.Caption>
    </Form.Group>
  </Form.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
