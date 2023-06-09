import type { NavbarProps } from '@/components/navbar'
import type { Meta, StoryFn } from '@storybook/react'

import { Avatar } from '@/components/avatar'
import { Navbar } from '@/components/navbar'
import navbar from '@/components/navbar/Navbar.styles'

const Component: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
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
    variant: {
      control: {
        type: 'select',
        options: ['highlight', 'underline'],
      },
    },
  },
}

const defaultProps = {
  ...navbar.defaultVariants,
}

const AcmeLogo = () => (
  <svg height="36" width="36" viewBox="0 0 32 32">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="inherit"
      fillRule="evenodd"
    />
  </svg>
)

export const Default: StoryFn = (args: NavbarProps) => (
  <Navbar {...args} variant="underline">
    <Navbar.Brand>
      <AcmeLogo />
    </Navbar.Brand>

    <Navbar.Content>
      <Navbar.Segment>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>About</Navbar.Item>
        <Navbar.Item>Features</Navbar.Item>
      </Navbar.Segment>

      <Navbar.Segment variant="none">
        <Navbar.Item>
          <Avatar size="xs">
            <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image" />
          </Avatar>
        </Navbar.Item>
      </Navbar.Segment>
    </Navbar.Content>
  </Navbar>
)

Default.args = {
  ...defaultProps,
}

export default Component
