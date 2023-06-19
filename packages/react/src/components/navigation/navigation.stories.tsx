import type { NavigationProps } from '@/components/navigation'
import type { Meta, StoryFn } from '@storybook/react'

import { navigation } from '@giantnodes/design-system'

import { Navigation } from '@/components/navigation'

const Component: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
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
    orientation: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
  },
}

const defaultProps = {
  ...navigation.defaultVariants,
}

const AcmeLogo = () => (
  <svg height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="inherit"
      fillRule="evenodd"
    />
  </svg>
)

export const Horizontal: StoryFn = (args: NavigationProps) => (
  <Navigation {...args} orientation="horizontal">
    <Navigation.Brand>
      <AcmeLogo />
    </Navigation.Brand>

    <Navigation.Segment>
      <Navigation.Item>
        <Navigation.Link>Home</Navigation.Link>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Link>About</Navigation.Link>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Link>Features</Navigation.Link>
      </Navigation.Item>
    </Navigation.Segment>

    <Navigation.Segment>
      <Navigation.Item>
        <Navigation.Link>Login</Navigation.Link>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Link>Logout</Navigation.Link>
      </Navigation.Item>
    </Navigation.Segment>

    <Navigation.Viewport />
  </Navigation>
)

Horizontal.args = {
  ...defaultProps,
}

export const Vertical: StoryFn = (args: NavigationProps) => (
  <Navigation {...args} orientation="vertical" variant="highlight">
    <Navigation.Brand>
      <AcmeLogo />
    </Navigation.Brand>

    <Navigation.Segment>
      <Navigation.Item>
        <Navigation.Link>Home</Navigation.Link>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Link>About</Navigation.Link>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Link>Features</Navigation.Link>
      </Navigation.Item>
    </Navigation.Segment>

    <Navigation.Segment>
      <Navigation.Item>
        <Navigation.Link>Login</Navigation.Link>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Link>Logout</Navigation.Link>
      </Navigation.Item>
    </Navigation.Segment>

    <Navigation.Viewport />
  </Navigation>
)

Vertical.args = {
  ...defaultProps,
}

export default Component
