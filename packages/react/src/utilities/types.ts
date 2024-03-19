export type Component<
  TElementType extends React.ElementType = 'div',
  TProps = any,
> = React.ComponentPropsWithRef<TElementType> & {
  as?: React.ElementType<TProps>
}

export type ComponentWithoutAs<T extends React.ElementType> = Omit<Component<T>, 'as'>

export type Selection = 'all' | Set<string | number>

export type ChangeHandler = (event: { target: any; type?: any }) => Promise<void | boolean>
