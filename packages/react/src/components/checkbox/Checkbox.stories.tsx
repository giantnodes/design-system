import type { CheckboxProps } from '@/components/checkbox'
import type { Meta, StoryFn } from '@storybook/react'

import { checkbox } from '@giantnodes/theme'

import { Checkbox } from '@/components/checkbox'

const Component: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: 'select' },
    },
  },
}

const defaultProps = {
  ...checkbox.defaultVariants,
}

export const Default: StoryFn = (args: CheckboxProps) => <Checkbox {...args} />

Default.args = {
  ...defaultProps,
}

export default Component
