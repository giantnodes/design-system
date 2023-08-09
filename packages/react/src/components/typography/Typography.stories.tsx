import type { TypographyHeadingProps } from '@/components/typography'
import type { Meta, StoryFn } from '@storybook/react'

import { typography } from '@giantnodes/theme'

import { Typography } from '@/components/typography'

const Component: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
}

const defaultProps = {
  ...typography.defaultVariants,
}

export const Heading: StoryFn = () => (
  <Typography.HeadingLevel>
    <Typography.Heading>Heading 1</Typography.Heading>
    <p>Torquent penatibus ipsum nascetur cursus primis lobortis</p>
    <Typography.HeadingLevel>
      <Typography.Heading>Heading 2</Typography.Heading>
      <p>Volutpat metus id purus dignissim fusce Tellus egestas.</p>
    </Typography.HeadingLevel>
    <Typography.HeadingLevel>
      <Typography.Heading>Heading 2</Typography.Heading>
      <p>Platea justo lectus. Praesent. Et sodales pellentesque</p>
    </Typography.HeadingLevel>
  </Typography.HeadingLevel>
)

Heading.args = {
  ...defaultProps,
}

export default Component
