import type { UseSidebarReturn } from '@/components/sidebar/use-sidebar.hook'

import { createContext } from '@/utilities/context'

export const [SidebarProvider, useSidebarContext] = createContext<UseSidebarReturn>({
  name: 'SidebarContext',
  strict: true,
  errorMessage: 'useSidebarContext: `context` is undefined. Seems you forgot to wrap component within <Sidebar />',
})
