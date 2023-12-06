'use client'

import type { UseAvatarReturn } from '@/components/avatar/use-avatar.hook'

import { createContext } from '@/utilities/context'

export const [AvatarProvider, useAvatarContext] = createContext<UseAvatarReturn>({
  name: 'AvatarProvider',
  strict: true,
  errorMessage: 'useAvatarContext: `context` is undefined. Seems you forgot to wrap component within <Avatar />',
})
