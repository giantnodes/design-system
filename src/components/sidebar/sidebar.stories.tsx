import type { SidebarProps } from '@/components/sidebar'
import type { Meta, StoryFn } from '@storybook/react'

import { Sidebar } from '@/components/sidebar'
import sidebar from '@/components/sidebar/Sidebar.styles'

const Component: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    position: {
      control: {
        type: 'select',
        options: ['static', 'sticky', 'floating'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
      <Sidebar.Item>Dashboard</Sidebar.Item>
      <Sidebar.Item>About</Sidebar.Item>
      <Sidebar.Item>Contact</Sidebar.Item>
    </Sidebar.Content>

    <Sidebar.Content>
      <Sidebar.Item>Login</Sidebar.Item>
      <Sidebar.Item>Logout</Sidebar.Item>
    </Sidebar.Content>
  </Sidebar>
)

Default.args = {
  ...defaultProps,
}

export const Icons: StoryFn = (args: SidebarProps) => (
  <Sidebar {...args}>
    <Sidebar.Brand>
      <AcmeLogo />
    </Sidebar.Brand>

    <Sidebar.Content>
      <Sidebar.Item>
        <AcmeLogo />
      </Sidebar.Item>
      <Sidebar.Item>
        <AcmeLogo />
      </Sidebar.Item>
      <Sidebar.Item>
        <AcmeLogo />
      </Sidebar.Item>
    </Sidebar.Content>

    <Sidebar.Content>
      <Sidebar.Item>
        <AcmeLogo />
      </Sidebar.Item>
      <Sidebar.Item>
        <AcmeLogo />
      </Sidebar.Item>
    </Sidebar.Content>
  </Sidebar>
)

Icons.args = {
  ...defaultProps,
}

export const Mixed: StoryFn = (args: SidebarProps) => (
  <Sidebar {...args}>
    <Sidebar.Brand>
      <AcmeLogo />
    </Sidebar.Brand>

    <Sidebar.Content>
      <Sidebar.Item>
        <AcmeLogo /> Dashboard
      </Sidebar.Item>
      <Sidebar.Item>
        <AcmeLogo /> About
      </Sidebar.Item>
      <Sidebar.Item>
        <AcmeLogo /> Contact
      </Sidebar.Item>
    </Sidebar.Content>

    <Sidebar.Content>
      <Sidebar.Item>Settings</Sidebar.Item>
      <Sidebar.Item>Logout</Sidebar.Item>
    </Sidebar.Content>
  </Sidebar>
)

Mixed.args = {
  ...defaultProps,
}

export default Component
