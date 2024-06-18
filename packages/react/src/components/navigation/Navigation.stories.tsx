import type { Meta, StoryFn } from '@storybook/react'
import { navigation } from '@giantnodes/theme'

import type { NavigationProps } from '~/components/navigation'
import { Navigation } from '~/components'

const Component: Meta<typeof Navigation.Root> = {
  title: 'Components/Navigation',
  component: Navigation.Root,
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    position: {
      control: { type: 'select' },
      options: ['sticky', 'static', 'floating'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['highlight'],
    },
    isBordered: {
      control: { type: 'boolean' },
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

export const Horizontal: StoryFn<NavigationProps> = (args) => (
  <Navigation.Root {...args} orientation="horizontal">
    <Navigation.Brand>
      <AcmeLogo />
    </Navigation.Brand>

    <Navigation.Segment>
      <Navigation.Item isSelected>
        <Navigation.Trigger>Home</Navigation.Trigger>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Trigger>About</Navigation.Trigger>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Trigger>Features</Navigation.Trigger>
      </Navigation.Item>
    </Navigation.Segment>

    <Navigation.Segment>
      <Navigation.Item>
        <Navigation.Trigger>Login</Navigation.Trigger>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Trigger>Logout</Navigation.Trigger>
      </Navigation.Item>
    </Navigation.Segment>
  </Navigation.Root>
)

Horizontal.args = {
  ...defaultProps,
}

export const Vertical: StoryFn<NavigationProps> = (args) => (
  <Navigation.Root {...args} orientation="vertical" variant="highlight">
    <Navigation.Brand>
      <AcmeLogo />
    </Navigation.Brand>

    <Navigation.Segment>
      <Navigation.Title>Your Teams</Navigation.Title>

      <Navigation.Item>
        <Navigation.Trigger>Home</Navigation.Trigger>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Trigger>About</Navigation.Trigger>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Trigger>Features</Navigation.Trigger>
      </Navigation.Item>
    </Navigation.Segment>

    <Navigation.Segment>
      <Navigation.Item>
        <Navigation.Trigger>Login</Navigation.Trigger>
      </Navigation.Item>
      <Navigation.Item>
        <Navigation.Trigger>Logout</Navigation.Trigger>
      </Navigation.Item>
    </Navigation.Segment>
  </Navigation.Root>
)

Vertical.args = {
  ...defaultProps,
}

export default Component
