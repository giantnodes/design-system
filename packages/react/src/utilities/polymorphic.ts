// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/70361
import type React from 'react'

export type PropsOf<TComponent extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<unknown>> =
  React.JSX.LibraryManagedAttributes<TComponent, React.ComponentPropsWithoutRef<TComponent>>

export type ExtendableComponentProps<TOwnProps = unknown, TOverride = unknown> = TOverride &
  Omit<TOwnProps, keyof TOverride>

export type InheritableComponentProps<
  TComponent extends React.ElementType,
  TProps = unknown,
> = ExtendableComponentProps<React.ComponentPropsWithoutRef<TComponent>, TProps>

export type Ref<TComponent extends React.ElementType> = React.ComponentPropsWithRef<TComponent>['ref']

export type ComponentPropsWithRef<TComponent extends React.ElementType, TProps = unknown> = InheritableComponentProps<
  TComponent,
  TProps & { as?: TComponent } & { ref?: Ref<TComponent> }
>
export type ComponentProps<TComponent extends React.ElementType, TProps = unknown> = InheritableComponentProps<
  TComponent,
  TProps & { as?: TComponent }
>

export type ExoticComponentReturn = ReturnType<React.ExoticComponent>

export type NamedExoticComponentType = { [K in keyof React.NamedExoticComponent]: React.NamedExoticComponent[K] }

export type PolymorphicElement<TComponent extends React.ElementType> = TComponent extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[TComponent]
  : TComponent

// import type React from 'react'
//
// type PropsOf<C extends React.ElementType> = React.ComponentPropsWithoutRef<C>
//
// type AsProp<C extends React.ElementType> = {
//   as?: C
// }
//
// type ExtendableProps<ExtendedProps = Record<string, unknown>, OverrideProps = Record<string, unknown>> = OverrideProps &
//   Omit<ExtendedProps, keyof OverrideProps>
//
// type InheritableElementProps<C extends React.ElementType, Props = Record<string, unknown>> = ExtendableProps<
//   PropsOf<C>,
//   Props
// >
//
// type ComponentProps<C extends React.ElementType, Props = Record<string, unknown>> = InheritableElementProps<
//   C,
//   Props & AsProp<C>
// >
//
// type Ref<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref']
//
// type ComponentPropsWithRef<C extends React.ElementType, Props = Record<string, unknown>> = ComponentProps<C, Props> & {
//   ref?: Ref<C>
// }
//
// export type { ComponentPropsWithRef, ComponentProps, Ref }
