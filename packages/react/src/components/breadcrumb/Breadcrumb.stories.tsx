import type { Meta, StoryFn } from '@storybook/react'
import { breadcrumb } from '@giantnodes/theme'

import type { BreadcrumbProps } from '~/components/breadcrumb'
import { Breadcrumb } from '~/components'

const Component: Meta<typeof Breadcrumb.Root> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb.Root,
}

const defaultProps = {
  ...breadcrumb.defaultVariants,
}

export const Default: StoryFn<BreadcrumbProps<object>> = (args) => (
  <Breadcrumb.Root {...args}>
    <Breadcrumb.Item href="/">Project</Breadcrumb.Item>
    <Breadcrumb.Item href="/">Giantnodes</Breadcrumb.Item>
    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
  </Breadcrumb.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
