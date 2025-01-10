'use client'

import type { SelectVariantProps } from '@giantnodes/theme'
import type { SelectionMode, SelectProps } from 'react-aria-components'
import React from 'react'
import { select } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseSelectProps<TElement extends object> = SelectVariantProps &
  Pick<SelectProps<TElement>, 'onSelectionChange'> & {
    ref?: React.RefObject<TElement>
    name?: string
    behavior?: 'toggle' | 'replace'
    mode?: SelectionMode
    onChange?: React.ChangeEventHandler<TElement>
  }

type SelectContextType = ReturnType<typeof useSelectValue>

export const useSelectValue = <TElement extends object>(props: UseSelectProps<TElement>) => {
  const { size, status } = props

  const slots = React.useMemo(() => select({ size, status }), [size, status])

  return {
    slots,
  }
}

export const [SelectContext, useSelect] = create<SelectContextType>({
  name: 'SelectContext',
  strict: true,
  errorMessage: 'useSelect: `context` is undefined. Seems you forgot to wrap component within <Select.Root />',
})
