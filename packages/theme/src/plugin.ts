import type { Config } from 'tailwindcss'
import Color from 'colorjs.io'
import plugin from 'tailwindcss/plugin'

import { semantic } from '~/colors/semantic'

type DeepRecord = {
  [key: string]: string | DeepRecord
}

class TailwindPluginBuilder {
  private readonly themes: Record<string, Record<string, string>>

  constructor(private readonly config: NonNullable<Config['theme']>) {
    this.themes = this.build()
  }

  private normalize(key: string): string {
    return key.replace('-DEFAULT', '').trim()
  }

  private build() {
    return Object.keys(this.config).reduce<Record<string, Record<string, string>>>((acc, name) => {
      acc[name] = this.flatten(this.config[name] as DeepRecord)
      return acc
    }, {})
  }

  private flatten(input: DeepRecord, prefix = '', delimiter = '-'): Record<string, string> {
    return Object.keys(input).reduce<Record<string, string>>((acc, key) => {
      const value = input[key]
      const segment = prefix ? this.normalize(`${prefix}${delimiter}${key}`) : key

      if (value == undefined) return acc

      if (typeof value === 'string') {
        acc[segment] = value
        return acc
      }

      const flattened = this.flatten(value, segment, delimiter)
      Object.assign(acc, flattened)

      if (typeof value.DEFAULT === 'string' && prefix) {
        acc[this.normalize(prefix)] = value.DEFAULT
      }

      return acc
    }, {})
  }

  variants() {
    return Object.keys(this.themes).reduce<Record<string, string[]>>((acc, name) => {
      acc[name] = [
        `.${name}&`,
        `:is(.${name} > &:not([data-theme]))`,
        `:is(.${name} &:not(.${name} [data-theme]:not(.${name}) * ))`,
        `:is(.${name}:not(:has([data-theme])) &:not([data-theme]))`,
      ]

      return acc
    }, {})
  }

  utilities() {
    return Object.keys(this.themes).reduce<Record<string, Record<string, string>>>((acc, name) => {
      const colors = this.themes[name]
      if (!colors) return acc

      acc[`.${name}`] = Object.entries(colors).reduce<Record<string, string>>((vars, [key, color]) => {
        const oklch = new Color(color).to('oklch').toString({ format: 'css', precision: 3, inGamut: true })
        vars[`--color-${key}`] = oklch
        return vars
      }, {})

      return acc
    }, {})
  }

  colors() {
    const colors = new Set<string>()
    Object.values(this.themes).forEach((theme) => Object.keys(theme).forEach((key) => colors.add(key)))

    return Array.from(colors).reduce<Record<string, string>>((acc, key) => {
      acc[key] = `var(--color-${key})`
      return acc
    }, {})
  }

  plugin(): ReturnType<typeof plugin> {
    return plugin(
      ({ addUtilities, addVariant }) => {
        addUtilities(this.utilities())
        Object.entries(this.variants()).forEach(([key, value]) => addVariant(key, value))
      },
      {
        theme: {
          extend: {
            colors: this.colors(),
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        plugins: [require('tailwindcss-react-aria-components')],
      }
    )
  }
}

export const giantnodes = (): ReturnType<typeof plugin> => {
  const builder = new TailwindPluginBuilder(semantic)
  return builder.plugin()
}
