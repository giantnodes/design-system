'use client'

import React from 'react'

import { HeadingLevelContext, useHeadingLevel } from './use-heading-level.hook'

export type TypographyHeadingLevelProps = React.PropsWithChildren

const TypographyHeadingLevel: React.FC<TypographyHeadingLevelProps> = ({ children }) => {
  const context = React.useContext(HeadingLevelContext)

  const value = useHeadingLevel({ level: context?.level })

  return <HeadingLevelContext.Provider value={value}>{children}</HeadingLevelContext.Provider>
}

TypographyHeadingLevel.displayName = 'Typography.HeadingLevel'

export default TypographyHeadingLevel
