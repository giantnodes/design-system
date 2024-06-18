import type { ProgressProps } from '@/components/progress'
import type { Meta, StoryFn } from '@storybook/react'

import { progress } from '@giantnodes/theme'

import { Progress } from '@/components'

const Component: Meta<typeof Progress.Root> = {
  title: 'Components/Progress',
  component: Progress.Root,
}

const defaultProps = {
  ...progress.defaultVariants,
}

export const Default: StoryFn<ProgressProps> = (args) => (
  <Progress.Root {...args}>
    <Progress.Bar color="#2cc76a" width={27} />
    <Progress.Bar color="#f85149" width={43} />
  </Progress.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
