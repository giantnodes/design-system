import type { Meta, StoryFn } from '@storybook/react'

import type { DialogProps } from '~/components/dialog'
import { Button, Card, Dialog } from '~/components'

const Component: Meta<typeof Dialog.Root> = {
  title: 'Components/Dialog',
  component: Dialog.Root,
}

const defaultProps = {}

export const Default: StoryFn<DialogProps> = (args) => (
  <Dialog.Trigger>
    <Button>Open</Button>

    <Dialog.Root {...args}>
      {({ close }) => (
        <Card.Root>
          <Card.Header>Dialog</Card.Header>

          <Card.Body>Dialog Content</Card.Body>

          <Card.Footer>
            <Button onClick={close}>Close</Button>
          </Card.Footer>
        </Card.Root>
      )}
    </Dialog.Root>
  </Dialog.Trigger>
)

Default.args = {
  ...defaultProps,
}

export default Component
