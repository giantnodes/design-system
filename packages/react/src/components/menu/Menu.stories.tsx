import type { MenuProps } from '@/components/menu'
import type { Meta, StoryFn } from '@storybook/react'

import { menu } from '@giantnodes/theme'

import { Button, Menu } from '@/components'

const Component: Meta<typeof Menu.Root> = {
  title: 'Components/Menu',
  component: Menu.Root,
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
  ...menu.defaultVariants,
}

export const Default: StoryFn<MenuProps> = (args) => (
  <Menu.Root {...args}>
    <Button>Open</Button>

    <Menu.Popover placement="bottom left">
      <Menu.List>
        <Menu.Item>First</Menu.Item>
        <Menu.Item>Second</Menu.Item>
        <Menu.Item>Third</Menu.Item>
      </Menu.List>
    </Menu.Popover>
  </Menu.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
