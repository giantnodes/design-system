import type { ListBoxItemProps } from 'react-aria-components'

import React from 'react'
import { ListBoxItem } from 'react-aria-components'

import { useSelectContext } from '@/components/select/use-select.hook'

type ComponentProps = ListBoxItemProps

const Component = React.forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useSelectContext()

  const item = React.useMemo<ListBoxItemProps>(
    () => ({
      ref,
      className: slots.option(),
      ...rest,
    }),
    [ref, rest, slots]
  )

  return <ListBoxItem {...item}>{children}</ListBoxItem>
})

export { ComponentProps as SelectOptionProps }
export default Component
