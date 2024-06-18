'use client'

import React from 'react'

import {
  HeadingLevelContext,
  useHeadingLevel,
  useHeadingLevelContext,
} from '~/components/typography/use-heading-level.hook'

export type TypographyHeadingLevelProps = React.PropsWithChildren

const TypographyHeadingLevel: React.FC<TypographyHeadingLevelProps> = ({ children }) => {
  const context = useHeadingLevelContext()

  const value = useHeadingLevel({ level: context?.level })

  return <HeadingLevelContext.Provider value={value}>{children}</HeadingLevelContext.Provider>
}

TypographyHeadingLevel.displayName = 'Typography.HeadingLevel'

export default TypographyHeadingLevel
