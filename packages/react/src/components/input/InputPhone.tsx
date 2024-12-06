'use client'

import type { InputVariantProps } from '@giantnodes/theme'
import type { CountryCode } from 'libphonenumber-js'
import type { InputProps, TextFieldProps } from 'react-aria-components'
import React from 'react'
import { getExampleNumber, parsePhoneNumber } from 'libphonenumber-js/min'
import examples from 'libphonenumber-js/mobile/examples'
import { Input, TextField } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useFormGroup } from '~/components/form/use-form-group.hook'
import { Addon } from '~/components/input/component.parts'
import { useInput, useInputValue } from '~/components/input/use-input.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'input'

type ComponentOwnProps = InputVariantProps &
  Omit<TextFieldProps, 'children'> & {
    country: CountryCode
    onTemplateChange?: (template: string) => void
  }

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, className, country, color, size, shape, variant, onTemplateChange, ...rest } = props

    const Element = as ?? TextField
    const group = useFormGroup()
    const context = useInput()

    const { slots } = useInputValue({
      color: color ?? group?.status ?? context?.color,
      size: size ?? context?.size,
      shape: shape ?? context?.shape,
      variant: variant ?? context?.variant,
    })

    /**
     * Generates a national phone number template for a given country.
     *
     * @returns {string | null} The phone number template with '#' for digits, or null if no example is available.
     *
     * @example
     * // For Australia (AU), return:
     * "#### ### ###"
     *
     * @example
     * // For United States (US), return:
     * "(###) ###-####"
     */
    const template = React.useMemo(() => {
      const example = getExampleNumber(country, examples)

      if (!example) return null

      const parsed = parsePhoneNumber(example.number, country)
      const formatted = parsed.format('NATIONAL')
      return formatted.replace(/\d/g, '#')
    }, [country])

    /**
     * Formats a phone number input string according to the national format of the specified country.
     *
     * @param {string} input - The raw input element text that will be formatted the phone number.
     * @returns {string} The formatted phone number string.
     */
    const format = React.useCallback(
      (input: string) => {
        if (template == null) return input

        input = input.replace(/\D/g, '')

        let result = ''
        let index = 0

        for (const element of template) {
          if (index >= input.length) break

          if (element === '#') {
            result += input[index]
            index++
          } else {
            result += element
          }
        }

        return result
      },
      [template]
    )

    const onChange = React.useCallback(
      (value: string) =>
        group?.onChange?.({
          target: { value: format(value) },
          type: 'change',
        }),
      [format, group]
    )

    const component = React.useMemo<TextFieldProps>(
      () => ({
        name: group?.name,
        onChange: onChange,
        onBlur: group?.onBlur,
        className: slots.field(),
        ...group?.fieldProps,
      }),
      [group?.fieldProps, group?.name, group?.onBlur, onChange, slots]
    )

    const input = React.useMemo<InputProps>(
      () => ({
        className: slots.input({ className: cn(className) }),
        ...rest,
      }),
      [className, rest, slots]
    )

    React.useEffect(() => {
      if (template) onTemplateChange?.(template)
    }, [template, onTemplateChange])

    return (
      <>
        <Addon>
          <CountryFlag country={country} />
        </Addon>

        <Element {...component}>
          <Input {...input} ref={(group?.ref as React.RefObject<HTMLInputElement> | undefined) ?? ref} />
        </Element>
      </>
    )
  }
)

type PhoneFlagProps = {
  country: CountryCode
}

const CountryFlag: React.FC<PhoneFlagProps> = ({ country }) => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
  const A_LETTER_CODEPOINT = '1f1e6'

  const increment = (codepoint: string, increment: number): string => {
    const decimal = parseInt(codepoint, 16)
    return Number(decimal + increment).toString(16)
  }

  const codepoints: Record<string, string> = ALPHABET.split('').reduce(
    (obj, letter, index) => ({
      ...obj,
      [letter]: increment(A_LETTER_CODEPOINT, index),
    }),
    {}
  )

  const source = React.useMemo<string>(() => {
    if (country.length < 2) {
      throw new Error('country code must be at least 2 characters long')
    }

    const first = country[0]?.toLowerCase()
    const second = country[1]?.toLowerCase()

    if (first == undefined || second == undefined) {
      throw new Error(`country code ${country} is invalid`)
    }

    const codepoint = [codepoints[first], codepoints[second]].join('-')

    return `https://raw.githubusercontent.com/jdecked/twemoji/main/assets/svg/${codepoint}.svg`
  }, [codepoints, country])

  return <img alt={`${country.toLowerCase()}-flag-icon`} height={24} src={source} width={24} />
}

export type { ComponentOwnProps as InputPhoneOwnProps, ComponentProps as InputPhoneProps }
export default Component
