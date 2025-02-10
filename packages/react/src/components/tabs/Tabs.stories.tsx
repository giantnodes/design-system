import type { Meta, StoryFn } from '@storybook/react'

import type { TabsProps } from '~/components/tabs'
import { Card, Tabs } from '~/components'

const Component: Meta<typeof Tabs.Root> = {
  title: 'Components/Tabs',
  component: Tabs.Root,
}

const defaultProps = {}

export const Default: StoryFn<TabsProps> = (args) => (
  <Tabs.Root {...args}>
    <Tabs.List>
      <Tabs.Item id="one">One</Tabs.Item>
      <Tabs.Item id="two">Two</Tabs.Item>
      <Tabs.Item id="three">Three</Tabs.Item>
    </Tabs.List>
  </Tabs.Root>
)

Default.args = {
  ...defaultProps,
}

export const Vertical: StoryFn<TabsProps> = (args) => (
  <div className="flex flex-row">
    <Tabs.Root orientation="vertical" {...args}>
      <Tabs.List>
        <Tabs.Item id="one">One</Tabs.Item>
        <Tabs.Item id="two">Two</Tabs.Item>
        <Tabs.Item id="three">Three</Tabs.Item>
      </Tabs.List>
    </Tabs.Root>
    <Card.Root className="rounded-l-none">
      <Card.Body />
    </Card.Root>
  </div>
)

Vertical.args = {
  ...defaultProps,
}

export default Component
