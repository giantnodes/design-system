import { RouterProvider } from '@react-aria/utils'

export type UseDesignSystemProps = React.PropsWithChildren & {
  /**
   * Function to perform client-side navigation.
   *
   * @param path - The path to navigate to.
   * @returns void
   */
  navigate?: (path: string) => void

  /**
   * Optional function to convert a router specific href to a native HTML href.
   *
   * @param href - The router-specific href to convert.
   * @returns The converted native HTML href.
   */
  useHref?: (href: string) => string
}

export const DesignSystemProvider: React.FC<UseDesignSystemProps> = ({ navigate, children }) => {
  let contents = children

  if (navigate) {
    contents = <RouterProvider navigate={navigate}>{contents}</RouterProvider>
  }

  return contents
}
