import type { ButtonProps } from '@/components/button'
import type { Meta, StoryFn } from '@storybook/react'

import { button } from '@giantnodes/theme'

import { Button, Link } from '@/components'

const Component: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['transparent', 'brand', 'success', 'info', 'warning', 'danger'],
    },
  },
}

const defaultProps = {
  ...button.defaultVariants,
}

export const Default: StoryFn<ButtonProps> = (args) => (
  <div className="flex gap-2">
    <Button {...args} color="neutral">
      Button
    </Button>
    <Button {...args} color="brand">
      Button
    </Button>
    <Button {...args} color="success">
      Button
    </Button>
    <Button {...args} color="info">
      Button
    </Button>
    <Button {...args} color="warning">
      Button
    </Button>
    <Button {...args} color="danger">
      Button
    </Button>
  </div>
)

Default.args = {
  ...defaultProps,
}

export const UsingLink: StoryFn<ButtonProps> = (args) => (
  <Button {...args} as={Link} href="www.giantnodes.com" target="__blank">
    Button
  </Button>
)

UsingLink.args = {
  ...defaultProps,
}

export default Component
