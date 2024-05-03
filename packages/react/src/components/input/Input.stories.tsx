import type { InputGroupProps, InputProps } from '@/components/input'
import type { Meta, StoryFn } from '@storybook/react'

import { input } from '@giantnodes/theme'

import { Input } from '@/components/input'

type InputComponentProps = React.ComponentProps<typeof Input>

const Component: Meta<InputComponentProps> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    status: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'success', 'info', 'warning', 'danger'],
    },
  },
}

const defaultProps = {
  ...input.defaultVariants,
}

export const Default: StoryFn<InputProps> = (args) => <Input placeholder="Username" type="text" {...args} />

Default.args = {
  ...defaultProps,
}

export const UsingGroup: StoryFn<InputGroupProps> = (args) => (
  <Input.Group {...args}>
    <Input.Addon>$</Input.Addon>
    <Input placeholder="Username" type="text" />
    <Input.Addon>USD</Input.Addon>
  </Input.Group>
)

UsingGroup.args = {
  ...defaultProps,
}

export default Component
