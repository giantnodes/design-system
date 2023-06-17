export type Component<T extends React.ElementType> = React.ComponentPropsWithRef<T> & {
  as?: T
}
