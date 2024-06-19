export const flip = (colors: Record<number, string>): Record<number, string> => {
  const flipped: Record<number, string> = {}

  const keys = Object.keys(colors).map((key) => parseInt(key))

  Object.values(colors)
    .reverse()
    .forEach((color, index) => {
      const key = keys[index]

      if (key !== undefined) {
        flipped[key] = color
      }
    })

  return flipped
}
