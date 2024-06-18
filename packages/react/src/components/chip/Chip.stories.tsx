import type { Meta, StoryFn } from '@storybook/react'
import { chip } from '@giantnodes/theme'

import type { ChipProps } from '~/components/chip'
import { Chip } from '~/components'

const Component: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'success', 'info', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

const defaultProps = {
  ...chip.defaultVariants,
}

export const Default: StoryFn<ChipProps> = (args) => (
  <div className="flex gap-2">
    <Chip {...args} color="neutral">
      Neutral
    </Chip>
    <Chip {...args} color="brand">
      Brand
    </Chip>
    <Chip {...args} color="success">
      Success
    </Chip>
    <Chip {...args} color="info">
      Info
    </Chip>
    <Chip {...args} color="warning">
      Warning
    </Chip>
    <Chip {...args} color="danger">
      Danger
    </Chip>
  </div>
)

Default.args = {
  ...defaultProps,
}

export default Component
