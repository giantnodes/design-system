export type Component<T extends React.ElementType> = React.ComponentPropsWithRef<T> & {
  as?: T
}

export type ComponentWithoutAs<T extends React.ElementType> = Omit<Component<T>, 'as'>
