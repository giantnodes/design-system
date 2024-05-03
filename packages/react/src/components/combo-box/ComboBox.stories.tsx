import type { ComboBoxProps } from '@/components/combo-box'
import type { Meta, StoryFn } from '@storybook/react'

import { combobox } from '@giantnodes/theme'

import { Typography } from '../typography'

import { Avatar } from '@/components/avatar'
import { ComboBox } from '@/components/combo-box'
import { Input } from '@/components/input'

const Component: Meta<typeof ComboBox> = {
  title: 'Components/ComboBox',
  component: ComboBox,
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
  <ComboBox {...args}>
    <Input.Group>
      <Input placeholder="People" type="text" />
    </Input.Group>

    <ComboBox.Popover>
      <ComboBox.List items={people}>{(item) => <ComboBox.Item key={item.id}>{item.name}</ComboBox.Item>}</ComboBox.List>
    </ComboBox.Popover>
  </ComboBox>
)

Default.args = {
  ...defaultProps,
}

export const Custom: StoryFn<ComboBoxProps<object>> = (args) => (
  <ComboBox {...args}>
    <Input.Group>
      <Input placeholder="People" type="text" />
    </Input.Group>

    <ComboBox.Popover>
      <ComboBox.List items={people}>
        {(item) => (
          <ComboBox.Item key={item.id} className="flex items-center gap-2" textValue={item.name}>
            <Avatar size="xs">
              <Avatar.Image alt={item.name} src={`https://api.dicebear.com/8.x/personas/svg?seed=${item.name}`} />
            </Avatar>

            <Typography.Text slot="label">{item.name}</Typography.Text>
          </ComboBox.Item>
        )}
      </ComboBox.List>
    </ComboBox.Popover>
  </ComboBox>
)

Custom.args = {
  ...defaultProps,
}

export default Component
