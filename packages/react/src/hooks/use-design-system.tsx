import { RouterProvider } from '@react-aria/utils'

export type UseDesignSystemProps = React.PropsWithChildren & {
  /**
   * Provides a client side router to all components that contain links
   */
  navigate?: (path: string) => void
}

export const DesignSystemProvider: React.FC<UseDesignSystemProps> = ({ navigate, children }) => {
  let contents = children

  if (navigate) {
    contents = <RouterProvider navigate={navigate}>{contents}</RouterProvider>
  }

  return contents
}
