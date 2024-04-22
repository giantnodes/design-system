import type { ProgressProps } from '@/components/progress'
import type { Meta, StoryFn } from '@storybook/react'

import { progress } from '@giantnodes/theme'

import { Progress } from '@/components/progress'

const Component: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
}

const defaultProps = {
  ...progress.defaultVariants,
}

export const Default: StoryFn<ProgressProps> = (args) => (
  <Progress {...args}>
    <Progress.Bar color="#2cc76a" width={27} />
    <Progress.Bar color="#f85149" width={43} />
  </Progress>
)

Default.args = {
  ...defaultProps,
}

export default Component
