import type { LinkProps } from '@/components/link'
import type { Meta, StoryFn } from '@storybook/react'

import { link } from '@giantnodes/theme'

import { Link } from '@/components/link'

const Component: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
}

const defaultProps = {
  ...link.defaultVariants,
}

export const Default: StoryFn = (args: LinkProps) => <Link {...args}>There were 2 errors with your submission</Link>
Default.args = {
  ...defaultProps,
}

export default Component
