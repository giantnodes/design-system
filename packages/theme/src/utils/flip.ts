export const flip = (colors: Record<number, string>) => {
  const flipped: Record<number, string> = {}

  const keys = Object.keys(colors) as unknown as number[]

  Object.values(colors)
    .reverse()
    .forEach((color, index) => {
      flipped[keys[index]] = color
    })

  return flipped
}
