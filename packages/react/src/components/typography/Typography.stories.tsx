import type { Meta, StoryFn } from '@storybook/react'

import { typography } from '@giantnodes/theme'

import { Typography } from '@/components/typography'

const Component: Meta<typeof Typography> = {
  title: 'Components/Typography',
}

const defaultProps = {
  ...typography.defaultVariants,
}

export const Heading: StoryFn = () => (
  <Typography.HeadingLevel>
    <Typography.Heading>Heading 1</Typography.Heading>
    <Typography.Paragraph>Torquent penatibus ipsum nascetur cursus primis lobortis</Typography.Paragraph>
    <Typography.Text>Torquent penatibus ipsum nascetur cursus primis lobortis</Typography.Text>
  </Typography.HeadingLevel>
)

Heading.args = {
  ...defaultProps,
}

export default Component
