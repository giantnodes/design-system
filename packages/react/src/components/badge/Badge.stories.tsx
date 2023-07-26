import type { BadgeProps } from '@/components/badge'
import type { Meta, StoryFn } from '@storybook/react'

import { badge } from '@giantnodes/design-system'

import { Badge } from '@/components/badge'

const Component: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'info', 'warning', 'danger'],
    },
    radius: {
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
  ...badge.defaultVariants,
}

export const Default: StoryFn = (args: BadgeProps) => (
  <div className="flex gap-2">
    <Badge {...args} color="neutral">
      Badge
    </Badge>
    <Badge {...args} color="success">
      Badge
    </Badge>
    <Badge {...args} color="info">
      Badge
    </Badge>
    <Badge {...args} color="warning">
      Badge
    </Badge>
    <Badge {...args} color="danger">
      Badge
    </Badge>
  </div>
)
Default.args = {
  ...defaultProps,
}

export default Component
