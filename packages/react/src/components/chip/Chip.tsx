import type { UseChipProps } from '@/components/chip/use-chip.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useChip } from '@/components/chip/use-chip.hook'

export type ChipProps = Component<'span'> & UseChipProps

const Chip = React.forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useChip(props)

  const Component = as || 'span'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

Chip.displayName = 'Chip'

export default Object.assign(Chip, {})
