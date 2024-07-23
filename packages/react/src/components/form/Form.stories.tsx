import type { Meta, StoryFn } from '@storybook/react'
import { form } from '@giantnodes/theme'

import type { FormProps } from '~/components/form'
import { Form, Input } from '~/components'

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
      <Input.Root>
        <Input.Addon>$</Input.Addon>
        <Input.Text placeholder="Username" type="text" />
        <Input.Addon>USD</Input.Addon>
      </Input.Root>

      <Form.Caption>A unique string of characters that identifies an email account</Form.Caption>
    </Form.Group>
  </Form.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
