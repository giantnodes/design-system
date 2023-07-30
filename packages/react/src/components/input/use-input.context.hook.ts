'use client'

import type { UseInputReturn } from '@/components/input/use-input.hook'

import { createContext } from '@/utilities/context'

export const [InputProvider, useInputContext] = createContext<UseInputReturn>({
  name: 'InputProvider',
  strict: true,
  errorMessage: 'InputProvider: `context` is undefined. Seems you forgot to wrap component within <Input />',
})
