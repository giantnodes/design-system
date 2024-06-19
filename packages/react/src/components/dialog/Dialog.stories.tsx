import type { Meta, StoryFn } from '@storybook/react'

import type { DialogProps } from '~/components/dialog'
import { Button, Card, Dialog } from '~/components'

const Component: Meta<typeof Dialog.Root> = {
  title: 'Components/Dialog',
  component: Dialog.Root,
}

const defaultProps = {}

export const Default: StoryFn<DialogProps> = (args) => (
  <Dialog.Root {...args}>
    <Button>Open</Button>

    <Dialog.Content>
      {({ close }) => (
        <Card.Root>
          <Card.Header>Dialog</Card.Header>

          <Card.Body>Dialog Content</Card.Body>

          <Card.Footer>
            <Button onClick={close}>Close</Button>
          </Card.Footer>
        </Card.Root>
      )}
    </Dialog.Content>
  </Dialog.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
