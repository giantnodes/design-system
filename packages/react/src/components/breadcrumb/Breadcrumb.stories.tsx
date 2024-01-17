import type { BreadcrumbProps } from '@/components/breadcrumb'
import type { Meta, StoryFn } from '@storybook/react'

import { breadcrumb } from '@giantnodes/theme'

import { Breadcrumb } from '@/components/breadcrumb'

const Component: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
}

const defaultProps = {
  ...breadcrumb.defaultVariants,
}

export const Default: StoryFn = (args: BreadcrumbProps<object>) => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item>Project</Breadcrumb.Item>
    <Breadcrumb.Item>Giantnodes</Breadcrumb.Item>
    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
  </Breadcrumb>
)

Default.args = {
  ...defaultProps,
}

export default Component
