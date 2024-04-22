import type { MenuProps } from '@/components/menu'
import type { Meta, StoryFn } from '@storybook/react'

import { menu } from '@giantnodes/theme'

import { Button } from '@/components/button'
import { Menu } from '@/components/menu'

const Component: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
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
  ...menu.defaultVariants,
}

export const Default: StoryFn<MenuProps> = (args) => (
  <Menu {...args}>
    <Button>Open</Button>

    <Menu.Popover placement="bottom right">
      <Menu.List>
        <Menu.Item>First</Menu.Item>
        <Menu.Item>Second</Menu.Item>
        <Menu.Item>Third</Menu.Item>
      </Menu.List>
    </Menu.Popover>
  </Menu>
)

Default.args = {
  ...defaultProps,
}

export default Component
