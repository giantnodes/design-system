import type { Meta, StoryFn } from '@storybook/react'
import { card } from '@giantnodes/theme'

import type { CardProps } from '~/components/card'
import { Card } from '~/components'

const Component: Meta<typeof Card.Root> = {
  title: 'Components/Card',
  component: Card.Root,
}

const defaultProps = {
  ...card.defaultVariants,
}

export const Default: StoryFn<CardProps> = (args) => (
  <Card.Root {...args}>
    <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
    <Card.Body>
      Quisque in purus elit. Vivamus tincidunt eget leo ac consectetur. Cras non est nec nibh cursus malesuada. Sed id
      mattis est. Mauris tempus, sapien et volutpat vehicula, mi purus efficitur neque, sed ultricies eros elit id nisi.
      Nulla hendrerit risus risus, vel eleifend tellus fermentum eget. Nullam dapibus purus sed metus placerat
      scelerisque ac eu enim. Ut pretium rhoncus eros, non condimentum lorem rutrum et. Sed pulvinar tortor elit, et
      facilisis lacus dictum quis. Curabitur mollis sem sed nisl eleifend tincidunt. Aliquam vitae diam tristique,
      accumsan leo eget, rhoncus tellus. Aliquam quis porttitor risus. Etiam sagittis tempus sapien congue tincidunt. In
      hac habitasse platea dictumst.
    </Card.Body>
    <Card.Footer>Lorem ipsum dolor sit amet.</Card.Footer>
  </Card.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
