import type { LinkProps } from '@/components/link'
import type { Meta, StoryFn } from '@storybook/react'

import { link } from '@giantnodes/theme'

import { Link } from '@/components'

const Component: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
}

const defaultProps = {
  href: 'www.giantnodes.com',
  ...link.defaultVariants,
}

export const Default: StoryFn<LinkProps> = (args) => <Link {...args}>Default Link</Link>

Default.args = {
  ...defaultProps,
}

export default Component
