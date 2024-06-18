import type { ComboBoxProps } from '@/components/combo-box'
import type { Meta, StoryFn } from '@storybook/react'

import { combobox } from '@giantnodes/theme'

import { Typography } from '../typography'

import { Avatar, ComboBox, Input } from '@/components'

const Component: Meta<typeof ComboBox.Root> = {
  title: 'Components/ComboBox',
  component: ComboBox.Root,
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    status: {
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
    },
  },
}

const defaultProps = {
  ...combobox.defaultVariants,
}

const people = [
  { id: 1, name: 'Raymond Chappell' },
  { id: 2, name: 'David Bolden' },
  { id: 3, name: 'Charles Marcano' },
  { id: 4, name: 'Jeanne Livesay' },
  { id: 5, name: 'David Bolden' },
]

export const Default: StoryFn<ComboBoxProps<object>> = (args) => (
  <ComboBox.Root {...args}>
    <Input.Group>
      <Input.Root placeholder="People" type="text" />
    </Input.Group>

    <ComboBox.Popover>
      <ComboBox.List items={people}>{(item) => <ComboBox.Item key={item.id}>{item.name}</ComboBox.Item>}</ComboBox.List>
    </ComboBox.Popover>
  </ComboBox.Root>
)

Default.args = {
  ...defaultProps,
}

export const Custom: StoryFn<ComboBoxProps<object>> = (args) => (
  <ComboBox.Root {...args}>
    <Input.Group>
      <Input.Root placeholder="People" type="text" />
    </Input.Group>

    <ComboBox.Popover>
      <ComboBox.List items={people}>
        {(item) => (
          <ComboBox.Item key={item.id} className="flex items-center gap-2" textValue={item.name}>
            <Avatar.Root size="xs">
              <Avatar.Image alt={item.name} src={`https://api.dicebear.com/8.x/personas/svg?seed=${item.name}`} />
            </Avatar.Root>

            <Typography.Text slot="label">{item.name}</Typography.Text>
          </ComboBox.Item>
        )}
      </ComboBox.List>
    </ComboBox.Popover>
  </ComboBox.Root>
)

Custom.args = {
  ...defaultProps,
}

export default Component
