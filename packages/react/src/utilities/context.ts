import React from 'react'

export type CreateContextOptions = {
  /**
   * If `true`, React will throw if context is `null` or `undefined`
   * In some cases, you might want to support nested context, so you can set it to `false`
   */
  strict?: boolean
  /**
   * Error message to throw if the context is `undefined`
   */
  errorMessage?: string
  /**
   * The display name of the context
   */
  name?: string
}

export type CreateContextReturn<T> = [React.Context<T>, () => T]

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext<ContextType>(options: CreateContextOptions = {}) {
  const {
    strict = true,
    errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
    name,
  } = options

  const Context = React.createContext<ContextType | undefined>(undefined)

  Context.displayName = name

  const useContext = () => {
    const context = React.useContext(Context)

    if (!context && strict) {
      const error = new Error(errorMessage)

      error.name = 'ContextError'
      throw error
    }

    return context
  }

  return [Context, useContext] as CreateContextReturn<ContextType>
}
