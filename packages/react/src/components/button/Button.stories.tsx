import type { ButtonProps } from '@/components/button'
import type { Meta, StoryFn } from '@storybook/react'

import { button } from '@giantnodes/theme'

import { Button } from '@/components/button'

const Component: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['brand', 'success', 'info', 'warning', 'danger'],
    },
    shape: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
    },
  },
}

const defaultProps = {
  ...button.defaultVariants,
}

export const Default: StoryFn = (args: ButtonProps) => (
  <div className="flex gap-2">
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

export default Component
