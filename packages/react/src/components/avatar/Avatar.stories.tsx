import type { AvatarGroupProps, AvatarProps } from '@/components/avatar'
import type { Meta, StoryFn } from '@storybook/react'

import { avatar } from '@giantnodes/design-system'

import { Avatar } from '@/components/avatar'

const Component: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'info', 'warning', 'danger'],
    },
    radius: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
  },
}

const defaultProps = {
  ...avatar.defaultVariants,
}

export const Default: StoryFn = (args: AvatarProps) => (
  <Avatar {...args}>
    <Avatar.Image alt="avatar image" src="https://i.pravatar.cc/150?img=1" />
  </Avatar>
)
Default.args = {
  ...defaultProps,
}

export const UsingGroup: StoryFn = (args: AvatarGroupProps) => (
  <Avatar.Group {...args}>
    <Avatar>
      <Avatar.Image alt="avatar image 1" src="https://i.pravatar.cc/150?img=1" />
      <Avatar.Notification />
    </Avatar>
    <Avatar>
      <Avatar.Image alt="avatar image 2" src="https://i.pravatar.cc/150?img=1" />
      <Avatar.Notification />
    </Avatar>
    <Avatar>
      <Avatar.Image alt="avatar image 3" src="https://i.pravatar.cc/150?img=1" />
      <Avatar.Notification />
    </Avatar>
    <Avatar>
      <Avatar.Image alt="avatar image 4" src="https://i.pravatar.cc/150?img=1" />
      <Avatar.Notification />
    </Avatar>
    <Avatar>
      <Avatar.Image alt="avatar image 5" src="https://i.pravatar.cc/150?img=1" />
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
    <Avatar.Image alt="avatar image 1" src="https://i.pravatar.cc/150?img=1" />
    <Avatar.Notification />
  </Avatar>
)
UsingNotification.args = {
  ...defaultProps,
}

export default Component
