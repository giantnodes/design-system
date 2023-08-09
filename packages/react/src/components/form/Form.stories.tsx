import type { FormProps } from '@/components/form'
import type { Meta, StoryFn } from '@storybook/react'

import { form } from '@giantnodes/theme'

import { Form } from '@/components/form'
import { Input } from '@/components/input'

const Component: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  argTypes: {},
}

const defaultProps = {
  ...form.defaultVariants,
}

export const Default: StoryFn = (args: FormProps) => (
  <Form {...args}>
    <Form.Group>
      <Form.Label>Email address</Form.Label>
      <Input>
        <Input.Addon>$</Input.Addon>
        <Input.Control placeholder="Username" type="text" />
        <Input.Addon>USD</Input.Addon>
      </Input>
      <Form.Caption>invalid email address provided</Form.Caption>
    </Form.Group>
  </Form>
)

Default.args = {
  ...defaultProps,
}

export default Component
