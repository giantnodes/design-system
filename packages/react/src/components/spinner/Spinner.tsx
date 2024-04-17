import type { ComponentWithoutAs } from '@/utilities/types'

import { spinner } from '@giantnodes/theme'
import React from 'react'

type ComponentProps = ComponentWithoutAs<'svg'>

const Component = React.forwardRef<SVGSVGElement, ComponentProps>((props, ref) => {
  const { className, ...rest } = props

  const slots = React.useMemo(() => spinner({}), [])

  const component = React.useMemo<React.SVGProps<SVGSVGElement>>(
    () => ({
      ref,
      className: slots.svg(),
      ...rest,
    }),
    [ref, rest, slots]
  )

  return (
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...component}>
      <circle className={slots.circle()} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2.5} />
      <path
        className={slots.path()}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      />
    </svg>
  )
})

Component.displayName = 'Spinner'

export { ComponentProps as SpinnerProps }
export default Component
