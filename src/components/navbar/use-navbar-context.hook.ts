import type { UseNavbarReturn } from '@/components/navbar/use-navbar.hook'

import { createContext } from '@/utils/context'

export const [NavbarProvider, useNavbarContext] = createContext<UseNavbarReturn>({
  name: 'NavbarContext',
  strict: true,
  errorMessage: 'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />',
})
