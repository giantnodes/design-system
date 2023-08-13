'use client'

import type { UseAlertReturn } from '@/components/alert/use-alert.hook'

import { createContext } from '@/utilities/context'

export const [AlertProvider, useAlertContext] = createContext<UseAlertReturn>({
  name: 'AlertContext',
  strict: true,
  errorMessage: 'useAlertContext: `context` is undefined. Seems you forgot to wrap component within <Alert />',
})
