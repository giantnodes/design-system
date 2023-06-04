import type { BadgeProps } from '@/components/badge'
import type { Meta, StoryFn } from '@storybook/react'

import { Badge } from '@/components/badge'
import badge from '@/components/badge/Badge.styles'

const Component: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['neutral', 'success', 'info', 'warning', 'danger'],
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['none', 'sm', 'md', 'lg', 'full'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['bordered', 'flat'],
      },
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
