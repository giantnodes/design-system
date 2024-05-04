import type { CheckboxProps } from '@/components/checkbox'
import type { Meta, StoryFn } from '@storybook/react'

import { checkbox } from '@giantnodes/theme'

import Card from '@/components/card/Card'
import { Checkbox } from '@/components/checkbox'

const Component: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'success', 'info', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

const defaultProps = {
  ...checkbox.defaultVariants,
}

export const Default: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />

Default.args = {
  ...defaultProps,
}

export const UsingCard: StoryFn<CheckboxProps> = (args) => (
  <Card>
    <Card.Body>
      <Checkbox {...args} />
    </Card.Body>
  </Card>
)

UsingCard.args = {
  ...defaultProps,
}

export default Component
