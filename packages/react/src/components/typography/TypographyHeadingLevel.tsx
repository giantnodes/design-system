'use client'

import React from 'react'

import {
  HeadingLevelContext,
  useHeadingLevel,
  useHeadingLevelValue,
} from '~/components/typography/use-heading-level.hook'

export type TypographyHeadingLevelProps = React.PropsWithChildren

const TypographyHeadingLevel: React.FC<TypographyHeadingLevelProps> = ({ children }) => {
  const context = useHeadingLevel()

  const value = useHeadingLevelValue({ level: context?.level })

  return <HeadingLevelContext.Provider value={value}>{children}</HeadingLevelContext.Provider>
}

TypographyHeadingLevel.displayName = 'Typography.HeadingLevel'

export default TypographyHeadingLevel
