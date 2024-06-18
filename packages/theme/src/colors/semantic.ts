import colors from 'tailwindcss/colors'

import { brand } from '~/colors/brand'
import { seashell } from '~/colors/seashell'
import { shark } from '~/colors/shark'
import { flip } from '~/utilities/flip'

export const semantic = {
  light: {
    background: seashell[400],
    middleground: '#ffffff',
    foreground: seashell[300],

    partition: seashell[600],

    title: shark[600],
    content: shark[400],
    subtitle: shark[300],

    brand: {
      ...brand,
      DEFAULT: brand[500],
    },
    shark: {
      ...shark,
      DEFAULT: shark[500],
    },

    success: {
      ...colors.green,
      DEFAULT: colors.green[500],
    },
    info: {
      ...colors.blue,
      DEFAULT: colors.blue[500],
    },
    warning: {
      ...colors.yellow,
      DEFAULT: colors.yellow[500],
    },
    danger: {
      ...colors.red,
      DEFAULT: colors.red[500],
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
      DEFAULT: brand[500],
    },
    shark: {
      ...flip(shark),
      DEFAULT: shark[500],
    },

    success: {
      ...flip(colors.green),
      DEFAULT: colors.green[500],
    },
    info: {
      ...flip(colors.blue),
      DEFAULT: colors.blue[500],
    },
    warning: {
      ...flip(colors.yellow),
      DEFAULT: colors.yellow[500],
    },
    danger: {
      ...flip(colors.red),
      DEFAULT: colors.red[500],
    },
  },
}
