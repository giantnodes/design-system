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
    <Typography.Text>Torquent penatibus ipsum nascetur cursus primis lobortis</Typography.Text>
    <Typography.HeadingLevel>
      <Typography.Heading>Heading 2</Typography.Heading>
      <Typography.Text>Volutpat metus id purus dignissim fusce Tellus egestas.</Typography.Text>
    </Typography.HeadingLevel>
    <Typography.HeadingLevel>
      <Typography.Heading>Heading 2</Typography.Heading>
      <Typography.Text>Platea justo lectus. Praesent. Et sodales pellentesque</Typography.Text>
    </Typography.HeadingLevel>
  </Typography.HeadingLevel>
)

Heading.args = {
  ...defaultProps,
}

export default Component
