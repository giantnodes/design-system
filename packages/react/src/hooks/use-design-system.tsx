import { RouterProvider } from '@react-aria/utils'

import { createContext } from '@/utilities/context'

export type UseDesignSystemProps = React.PropsWithChildren & {
  /**
   * Provides a client side router to all components that contain links
   */
  navigate?: (path: string) => void
}

export type UseDesignSystemReturn = ReturnType<typeof useDesignSystem>

export const useDesignSystem = ({ navigate, children }: UseDesignSystemProps) => {
  let contents = children

  if (navigate) {
    contents = <RouterProvider navigate={navigate}>{contents}</RouterProvider>
  }

  return contents
}

export const [DesignSystemContext, useDesignSystemContext] = createContext<UseDesignSystemReturn>({
  name: 'DesignSystemContext',
  strict: true,
  errorMessage:
    'useDesignSystemContext: `context` is undefined. Seems you forgot to wrap component within <DesignSystem.Provider />',
})
