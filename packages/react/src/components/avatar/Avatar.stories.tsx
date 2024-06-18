import type { AvatarGroupProps, AvatarProps } from '@/components/avatar'
import type { Meta, StoryFn } from '@storybook/react'

import { avatar } from '@giantnodes/theme'

import { Avatar } from '@/components'

const Component: Meta<typeof Avatar.Root> = {
  title: 'Components/Avatar',
  component: Avatar.Root,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'success', 'info', 'warning', 'danger'],
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

export const Default: StoryFn<AvatarProps> = (args) => (
  <Avatar.Root {...args}>
    <Avatar.Image alt="avatar image" src="https://api.dicebear.com/8.x/personas/svg" />
  </Avatar.Root>
)

Default.args = {
  ...defaultProps,
}

export const UsingGroup: StoryFn<AvatarGroupProps> = (args) => (
  <Avatar.Group {...args}>
    <Avatar.Root>
      <Avatar.Image alt="avatar 1" src="https://api.dicebear.com/8.x/personas/svg?seed=avatar-1" />
      <Avatar.Notification />
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image alt="avatar 2" src="https://api.dicebear.com/8.x/personas/svg?seed=avatar-2" />
      <Avatar.Notification />
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image alt="avatar 3" src="https://api.dicebear.com/8.x/personas/svg?seed=avatar-3" />
      <Avatar.Notification />
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image alt="avatar 4" src="https://api.dicebear.com/8.x/personas/svg?seed=avatar-4" />
      <Avatar.Notification />
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image alt="avatar 5" src="https://api.dicebear.com/8.x/personas/svg?seed=avatar-5" />
      <Avatar.Notification />
    </Avatar.Root>
  </Avatar.Group>
)

UsingGroup.args = {
  ...defaultProps,
}

export const UsingText: StoryFn<AvatarProps> = (args) => <Avatar.Root {...args}>JP</Avatar.Root>

UsingText.args = {
  ...defaultProps,
}

export const UsingIcon: StoryFn<AvatarProps> = (args) => (
  <Avatar.Root {...args}>
    <Avatar.Icon
      icon={
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      }
    />
    <Avatar.Notification />
  </Avatar.Root>
)

UsingIcon.args = {
  ...defaultProps,
}

export const UsingNotification: StoryFn<AvatarProps> = (args) => (
  <Avatar.Root {...args}>
    <Avatar.Image alt="avatar image 1" src="https://api.dicebear.com/8.x/personas/svg" />
    <Avatar.Notification />
  </Avatar.Root>
)

UsingNotification.args = {
  ...defaultProps,
}

export default Component
