export type Component<
  TElementType extends React.ElementType = 'div',
  TProps = unknown,
> = React.ComponentPropsWithRef<TElementType> & {
  as?: React.ElementType<TProps>
}

export type Override<T, R> = Omit<T, keyof R> & R

export type ComponentWithoutAs<TElement extends React.ElementType> = Omit<Component<TElement>, 'as'>

export type Selection = 'all' | Set<string | number>

export type ChangeHandler = (event: { target: unknown; type?: unknown }) => void | boolean
