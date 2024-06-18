import type { Meta, StoryFn } from '@storybook/react'
import { toggle } from '@giantnodes/theme'

import type { SwitchProps } from '~/components/switch'
import { Switch } from '~/components'

const Component: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['brand', 'success', 'info', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
    },
  },
}

const defaultProps = {
  ...toggle.defaultVariants,
}

export const Default: StoryFn<SwitchProps> = (args) => <Switch {...args} />

Default.args = {
  ...defaultProps,
}

export default Component
