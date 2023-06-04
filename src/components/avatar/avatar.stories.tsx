import type { AvatarGroupProps, AvatarProps } from '@/components/avatar'
import type { Meta, StoryFn } from '@storybook/react'

import { Avatar } from '@/components/avatar'
import avatar from '@/components/avatar/Avatar.styles'

const Component: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    radius: {
      control: {
        type: 'select',
        options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
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

export const UsingGroup: StoryFn = (args: AvatarGroupProps) => (
  <Avatar.Group {...args}>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image 1" />
      <Avatar.Notification />
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image 2" />
      <Avatar.Notification />
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image 3" />
      <Avatar.Notification />
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image 4" />
      <Avatar.Notification />
    </Avatar>
    <Avatar>
      <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image 5" />
      <Avatar.Notification />
    </Avatar>
  </Avatar.Group>
)
UsingGroup.args = {
  ...defaultProps,
}

export const UsingText: StoryFn = (args: AvatarProps) => (
  <Avatar {...args} className="bg-zinc-100">
    <p>JP</p>
  </Avatar>
)
UsingText.args = {
  ...defaultProps,
}

export const UsingIcon: StoryFn = (args: AvatarProps) => (
  <Avatar {...args} className="bg-zinc-100">
    <Avatar.Icon
      icon={
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      }
    />
  </Avatar>
)
UsingIcon.args = {
  ...defaultProps,
}

export const UsingNotification: StoryFn = (args: AvatarProps) => (
  <Avatar {...args}>
    <Avatar.Image src="https://i.pravatar.cc/150?img=1" alt="avatar image 1" />
    <Avatar.Notification />
  </Avatar>
)
UsingNotification.args = {
  ...defaultProps,
}

export default Component
