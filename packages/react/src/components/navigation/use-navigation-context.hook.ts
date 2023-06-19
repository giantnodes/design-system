import type { UseNavigationReturn } from '@/components/navigation/use-navigation.hook'

import { createContext } from '@/utilities/context'

export const [NavigationProvider, useNavigationContext] = createContext<UseNavigationReturn>({
  name: 'NavigationContext',
  strict: true,
  errorMessage:
    'useNavigationContext: `context` is undefined. Seems you forgot to wrap component within <Navigation />',
})
