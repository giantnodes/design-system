import type { ThemeProviderProps } from 'next-themes/dist/types'

import { RouterProvider } from '@react-aria/utils'
import { ThemeProvider } from 'next-themes'

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
} & ThemeProviderProps

export const DesignSystemProvider: React.FC<UseDesignSystemProps> = ({ navigate, children, ...rest }) => {
  let contents = children

  if (navigate) {
    contents = <RouterProvider navigate={navigate}>{contents}</RouterProvider>
  }

  return <ThemeProvider {...rest}>{contents}</ThemeProvider>
}
