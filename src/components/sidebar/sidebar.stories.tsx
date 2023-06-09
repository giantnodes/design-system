import type { SidebarProps } from '@/components/sidebar'
import type { Meta, StoryFn } from '@storybook/react'

import { Sidebar } from '@/components/sidebar'
import sidebar from '@/components/sidebar/Sidebar.styles'

const Component: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['static', 'sticky', 'floating'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
}

const defaultProps = {
  ...sidebar.defaultVariants,
}

const AcmeLogo = () => (
  <svg fill="none" height="36" width="36" viewBox="0 0 32 32">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export const Default: StoryFn = (args: SidebarProps) => (
  <Sidebar {...args}>
    <Sidebar.Brand>
      <AcmeLogo />
    </Sidebar.Brand>

    <Sidebar.Content>
      <Sidebar.Segment>
        <Sidebar.Item>Dashboard</Sidebar.Item>
        <Sidebar.Item>About</Sidebar.Item>
        <Sidebar.Item>Contact</Sidebar.Item>
      </Sidebar.Segment>

      <Sidebar.Segment>
        <Sidebar.Item>Login</Sidebar.Item>
        <Sidebar.Item>Logout</Sidebar.Item>
      </Sidebar.Segment>
    </Sidebar.Content>
  </Sidebar>
)

Default.args = {
  ...defaultProps,
}

export default Component
