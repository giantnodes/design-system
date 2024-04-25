import colors from 'tailwindcss/colors'

import { brand } from '@/colors/brand'
import { seashell } from '@/colors/seashell'
import { shark } from '@/colors/shark'
import { flip } from '@/utils/flip'

export const semantic = {
  light: {
    background: seashell[400],
    middleground: '#ffffff',
    foreground: seashell[300],

    partition: seashell[600],

    title: shark[600],
    content: shark[400],
    subtitle: shark[300],

    brand,

    success: {
      ...colors.green,
    },
    info: {
      ...colors.blue,
    },
    warning: {
      ...colors.yellow,
    },
    danger: {
      ...colors.red,
    },
  },
  dark: {
    background: shark[950],
    middleground: shark[800],
    foreground: shark[700],

    partition: shark[500],

    title: shark[50],
    content: shark[100],
    subtitle: shark[300],

    brand: {
      ...flip(brand),
    },

    success: {
      ...flip(colors.green),
    },
    info: {
      ...flip(colors.blue),
    },
    warning: {
      ...flip(colors.yellow),
    },
    danger: {
      ...flip(colors.red),
    },
  },
}
