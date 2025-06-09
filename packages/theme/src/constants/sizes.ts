export const SIZE = {
  height: {
    xs: 'h-[26px]',
    sm: 'h-[34px]',
    md: 'h-[38px]',
    lg: 'h-[42px]',
    xl: 'h-[50px]',
  },
  padding: {
    xs: 'px-2.5 py-1.5',
    sm: 'px-3 py-2',
    md: 'px-4 py-2',
    lg: 'px-4 py-2',
    xl: 'px-6 py-3',
  },
  size: {
    xs: 'size-3',
    sm: 'size-3.5',
    md: 'size-4',
    lg: 'size-4.5',
    xl: 'size-5',
  },
  space: {
    xs: 'space-x-2.5',
    sm: 'space-x-3',
    md: 'space-x-4',
    lg: 'space-x-4',
    xl: 'space-x-6',
  },
  text: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-base',
  },
}

type Size = keyof typeof SIZE_VARIANTS

export const SIZE_VARIANTS = {
  xs: `${SIZE.text.xs} ${SIZE.height.xs} ${SIZE.padding.xs} ${SIZE.space.xs}`,
  sm: `${SIZE.text.sm} ${SIZE.height.sm} ${SIZE.padding.sm} ${SIZE.space.sm}`,
  md: `${SIZE.text.md} ${SIZE.height.md} ${SIZE.padding.md} ${SIZE.space.md}`,
  lg: `${SIZE.text.lg} ${SIZE.height.lg} ${SIZE.padding.lg} ${SIZE.space.lg}`,
  xl: `${SIZE.text.xl} ${SIZE.height.xl} ${SIZE.padding.xl} ${SIZE.space.xl}`,
}

export const using = (slot: string, sizes: Record<Size, string>) => ({
  xs: { [slot]: sizes.xs },
  sm: { [slot]: sizes.sm },
  md: { [slot]: sizes.md },
  lg: { [slot]: sizes.lg },
  xl: { [slot]: sizes.xl },
})

export const SIZE_VARIANTS_DEFAULT = 'sm'
