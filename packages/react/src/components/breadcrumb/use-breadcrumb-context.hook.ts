'use client'

import type { UseBreadcrumbReturn } from '@/components/breadcrumb/use-breadcrumb.hook'

import { createContext } from '@/utilities/context'

export const [BreadcrumbProvider, useBreadcrumbContext] = createContext<UseBreadcrumbReturn>({
  name: 'BreadcrumbContext',
  strict: true,
  errorMessage:
    'useBreadcrumbContext: `context` is undefined. Seems you forgot to wrap component within <Breadcrumb />',
})
