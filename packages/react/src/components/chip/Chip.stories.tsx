import type { ChipProps } from '@/components/chip'
import type { Meta, StoryFn } from '@storybook/react'

import { chip } from '@giantnodes/theme'

import { Chip } from '@/components/chip'

const Component: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'success', 'info', 'warning', 'danger'],
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
  ...chip.defaultVariants,
}

export const Default: StoryFn = (args: ChipProps) => (
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