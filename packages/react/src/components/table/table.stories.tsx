import type { TableProps } from '@/components/table'
import type { Meta, StoryFn } from '@storybook/react'

import { table } from '@giantnodes/design-system'

import { Table } from '@/components/table'

const Component: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
}

const defaultProps = {
  ...table.defaultVariants,
}

export const Default: StoryFn = (args: TableProps) => (
  <Table {...args}>
    <Table.Head>
      <Table.Row>
        <Table.Header>Name</Table.Header>
        <Table.Header>Title</Table.Header>
        <Table.Header>Email</Table.Header>
        <Table.Header>Role</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Data>Lindsay Walton</Table.Data>
        <Table.Data>Front-end Developer</Table.Data>
        <Table.Data>lindsay.walton@example.com</Table.Data>
        <Table.Data>Member</Table.Data>
      </Table.Row>
      <Table.Row>
        <Table.Data>Courtney Henry</Table.Data>
        <Table.Data>Designer</Table.Data>
        <Table.Data>courtney.henry@example.com</Table.Data>
        <Table.Data>Admin</Table.Data>
      </Table.Row>
      <Table.Row>
        <Table.Data>Tom Cook</Table.Data>
        <Table.Data>Director of Product</Table.Data>
        <Table.Data>tom.cook@example.com</Table.Data>
        <Table.Data>Member</Table.Data>
      </Table.Row>
      <Table.Row>
        <Table.Data>Whitney Francis</Table.Data>
        <Table.Data>Copywriter</Table.Data>
        <Table.Data>whitney.francis@example.com</Table.Data>
        <Table.Data>Admin</Table.Data>
      </Table.Row>
      <Table.Row>
        <Table.Data>Leonard Krasner</Table.Data>
        <Table.Data>Senior Designer</Table.Data>
        <Table.Data>leonard.krasner@example.com</Table.Data>
        <Table.Data>Owner</Table.Data>
      </Table.Row>
      <Table.Row>
        <Table.Data>Floyd Miles</Table.Data>
        <Table.Data>Principal Designer</Table.Data>
        <Table.Data>floyd.miles@example.com</Table.Data>
        <Table.Data>Member</Table.Data>
      </Table.Row>
    </Table.Body>
  </Table>
)

Default.args = {
  ...defaultProps,
}

export default Component
