import type { InputProps } from '@/components/input'
import type { Meta, StoryFn } from '@storybook/react'

import { input } from '@giantnodes/design-system'

import { Input } from '@/components/input'

const Component: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    status: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'info', 'warning', 'danger'],
    },
  },
}

const defaultProps = {
  ...input.defaultVariants,
}

export const Default: StoryFn = (args: InputProps) => (
  <Input {...args}>
    <Input.Addon>$</Input.Addon>
    <Input.Control placeholder="Username" type="text" />
    <Input.Addon>USD</Input.Addon>
  </Input>
)

Default.args = {
  ...defaultProps,
}

export const Disabled: StoryFn = (args: InputProps) => (
  <Input {...args}>
    <Input.Addon>$</Input.Addon>
    <Input.Control disabled placeholder="Username" type="text" />
    <Input.Addon>USD</Input.Addon>
  </Input>
)

Disabled.args = {
  ...defaultProps,
}

export default Component
