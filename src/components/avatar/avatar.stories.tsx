import type { AvatarGroupProps, AvatarProps } from '@/components/avatar'
import type { Meta, StoryFn } from '@storybook/react'

import { Avatar } from '@/components/avatar'
import avatar from '@/components/avatar/Avatar.styles'

const Component: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['neutral', 'primary', 'secondary', 'success', 'warning', 'danger'],
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['none', 'base', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
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
  ...avatar.defaultVariants,
}

export const Default: StoryFn = (args: AvatarProps) => (
  <Avatar {...args}>
    <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image" />
  </Avatar>
)
Default.args = {
  ...defaultProps,
}

export const Group: StoryFn = (args: AvatarGroupProps) => (
  <Avatar.Group {...args}>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image 1" />
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=2" alt="avatar image 2" />
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=3" alt="avatar image 3" />
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=4" alt="avatar image 4" />
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=5" alt="avatar image 5" />
    </Avatar>
  </Avatar.Group>
)
Group.args = {
  ...defaultProps,
}

export const UsingIcon: StoryFn = (args: AvatarProps) => (
  <Avatar {...args}>
    <Avatar.Icon icon={<p>Icon</p>} />
  </Avatar>
)
UsingIcon.args = {
  ...defaultProps,
}

export const UsingBorder: StoryFn = (args: AvatarProps) => (
  <Avatar {...args}>
    <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image" />
  </Avatar>
)
UsingBorder.args = {
  ...defaultProps,
  bordered: true,
  color: 'primary',
}

export default Component
