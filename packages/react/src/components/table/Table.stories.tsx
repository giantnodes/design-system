import type { TableProps } from '@/components/table'
import type { Meta, StoryFn } from '@storybook/react'

import { table } from '@giantnodes/theme'

import { Table } from '@/components'

const Component: Meta<typeof Table.Root> = {
  title: 'Components/Table',
  component: Table.Root,
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    mode: {
      control: { type: 'select' },
    },
    behavior: {
      control: { type: 'select' },
    },
  },
}

const defaultProps = {
  ...table.defaultVariants,
}

export const Default: StoryFn<TableProps> = (args) => (
  <Table.Root {...args}>
    <Table.Head>
      <Table.Column isRowHeader>Name</Table.Column>
      <Table.Column>Title</Table.Column>
      <Table.Column>Email</Table.Column>
      <Table.Column>Role</Table.Column>
    </Table.Head>
    <Table.Body>
      <Table.Row key="1">
        <Table.Cell>Lindsay Walton</Table.Cell>
        <Table.Cell>Front-end Developer</Table.Cell>
        <Table.Cell>lindsay.walton@example.com</Table.Cell>
        <Table.Cell>Member</Table.Cell>
      </Table.Row>
      <Table.Row key="2">
        <Table.Cell>Courtney Henry</Table.Cell>
        <Table.Cell>Designer</Table.Cell>
        <Table.Cell>courtney.henry@example.com</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>
      <Table.Row key="3">
        <Table.Cell>Tom Cook</Table.Cell>
        <Table.Cell>Director of Product</Table.Cell>
        <Table.Cell>tom.cook@example.com</Table.Cell>
        <Table.Cell>Member</Table.Cell>
      </Table.Row>
      <Table.Row key="4">
        <Table.Cell>Whitney Francis</Table.Cell>
        <Table.Cell>Copywriter</Table.Cell>
        <Table.Cell>whitney.francis@example.com</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>
      <Table.Row key="5">
        <Table.Cell>Leonard Krasner</Table.Cell>
        <Table.Cell>Senior Designer</Table.Cell>
        <Table.Cell>leonard.krasner@example.com</Table.Cell>
        <Table.Cell>Owner</Table.Cell>
      </Table.Row>
      <Table.Row key="6">
        <Table.Cell>Floyd Miles</Table.Cell>
        <Table.Cell>Principal Designer</Table.Cell>
        <Table.Cell>floyd.miles@example.com</Table.Cell>
        <Table.Cell>Member</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
)

Default.args = {
  ...defaultProps,
}

export default Component
