import type { DialogProps } from '@/components/dialog'
import type { Meta, StoryFn } from '@storybook/react'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Dialog } from '@/components/dialog'

const Component: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
}

const defaultProps = {}

export const Default: StoryFn = (args: DialogProps) => (
  <Dialog {...args}>
    <Button>Open</Button>

    <Dialog.Content>
      {({ close }) => (
        <Card>
          <Card.Header>Dialog</Card.Header>

          <Card.Body>Dialog Content</Card.Body>

          <Card.Footer>
            <Button onClick={close}>Close</Button>
          </Card.Footer>
        </Card>
      )}
    </Dialog.Content>
  </Dialog>
)

Default.args = {
  ...defaultProps,
}

export default Component
