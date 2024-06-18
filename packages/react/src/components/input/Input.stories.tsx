import type { InputGroupProps, InputProps } from '@/components/input'
import type { Meta, StoryFn } from '@storybook/react'

import { input } from '@giantnodes/theme'

import { Input } from '@/components'

type InputComponentProps = React.ComponentProps<typeof Input.Root>

const Component: Meta<InputComponentProps> = {
  title: 'Components/Input',
  component: Input.Root,
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

export const Default: StoryFn<InputProps> = (args) => <Input.Root placeholder="Username" type="text" {...args} />

Default.args = {
  ...defaultProps,
}

export const UsingGroup: StoryFn<InputGroupProps> = (args) => (
  <Input.Group {...args}>
    <Input.Addon>$</Input.Addon>
    <Input.Root placeholder="Username" type="text" />
    <Input.Addon>USD</Input.Addon>
  </Input.Group>
)

UsingGroup.args = {
  ...defaultProps,
}

export const UsingSize: StoryFn<InputGroupProps> = (args) => (
  <div className="flex flex-col gap-2">
    <Input.Group {...args} size="sm">
      <Input.Addon>$</Input.Addon>
      <Input.Root placeholder="sm" type="text" />
      <Input.Addon>USD</Input.Addon>
    </Input.Group>

    <Input.Group {...args} size="md">
      <Input.Addon>$</Input.Addon>
      <Input.Root placeholder="md" type="text" />
      <Input.Addon>USD</Input.Addon>
    </Input.Group>

    <Input.Group {...args} size="lg">
      <Input.Addon>$</Input.Addon>
      <Input.Root placeholder="lg" type="text" />
      <Input.Addon>USD</Input.Addon>
    </Input.Group>
  </div>
)

UsingSize.args = {
  ...defaultProps,
}

export default Component
