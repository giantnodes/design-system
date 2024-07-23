import type { Meta, StoryFn } from '@storybook/react'
import { input } from '@giantnodes/theme'

import type { InputProps, InputTextProps } from '~/components/input'
import { Input } from '~/components'

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

export const Default: StoryFn<InputTextProps> = (args) => <Input.Text placeholder="Username" type="text" {...args} />

Default.args = {
  ...defaultProps,
}

export const UsingGroup: StoryFn<InputProps> = (args) => (
  <Input.Root {...args}>
    <Input.Addon>$</Input.Addon>
    <Input.Text placeholder="Username" type="text" />
    <Input.Addon>USD</Input.Addon>
  </Input.Root>
)

UsingGroup.args = {
  ...defaultProps,
}

export const UsingSize: StoryFn<InputProps> = (args) => (
  <div className="flex flex-col gap-2">
    <Input.Root {...args} size="sm">
      <Input.Addon>$</Input.Addon>
      <Input.Text placeholder="sm" type="text" />
      <Input.Addon>USD</Input.Addon>
    </Input.Root>

    <Input.Root {...args} size="md">
      <Input.Addon>$</Input.Addon>
      <Input.Text placeholder="md" type="text" />
      <Input.Addon>USD</Input.Addon>
    </Input.Root>

    <Input.Root {...args} size="lg">
      <Input.Addon>$</Input.Addon>
      <Input.Text placeholder="lg" type="text" />
      <Input.Addon>USD</Input.Addon>
    </Input.Root>
  </div>
)

UsingSize.args = {
  ...defaultProps,
}

export default Component
