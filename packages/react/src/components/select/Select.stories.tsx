import type { Meta, StoryFn } from '@storybook/react'
import { select } from '@giantnodes/theme'

import type { SelectProps } from '~/components/select'
import { Form, Select } from '~/components'

const Component: Meta<typeof Select.Root> = {
  title: 'Components/Select',
  component: Select.Root,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    status: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'success', 'info', 'warning', 'danger'],
    },
  },
}

const defaultProps = {
  ...select.defaultVariants,
}

export const Default: StoryFn<SelectProps<object>> = (args) => (
  <Select.Root {...args}>
    <Select.Option>Aardvark</Select.Option>
    <Select.Option>Cat</Select.Option>
    <Select.Option>Dog</Select.Option>
    <Select.Option>Kangaroo</Select.Option>
    <Select.Option>Panda</Select.Option>
    <Select.Option>Snake</Select.Option>
  </Select.Root>
)

Default.args = {
  ...defaultProps,
}

export const UsingSize: StoryFn<SelectProps<object>> = (args) => (
  <div className="flex flex-col gap-2">
    <Select.Root {...args} placeholder="sm" size="sm">
      <Select.Option>Aardvark</Select.Option>
      <Select.Option>Cat</Select.Option>
      <Select.Option>Dog</Select.Option>
      <Select.Option>Kangaroo</Select.Option>
      <Select.Option>Panda</Select.Option>
      <Select.Option>Snake</Select.Option>
    </Select.Root>

    <Select.Root {...args} placeholder="md" size="md">
      <Select.Option>Aardvark</Select.Option>
      <Select.Option>Cat</Select.Option>
      <Select.Option>Dog</Select.Option>
      <Select.Option>Kangaroo</Select.Option>
      <Select.Option>Panda</Select.Option>
      <Select.Option>Snake</Select.Option>
    </Select.Root>

    <Select.Root {...args} placeholder="lg" size="lg">
      <Select.Option>Aardvark</Select.Option>
      <Select.Option>Cat</Select.Option>
      <Select.Option>Dog</Select.Option>
      <Select.Option>Kangaroo</Select.Option>
      <Select.Option>Panda</Select.Option>
      <Select.Option>Snake</Select.Option>
    </Select.Root>
  </div>
)

UsingSize.args = {
  ...defaultProps,
}

export const UsingForm: StoryFn<SelectProps<object>> = (args) => (
  <Form.Root>
    <Form.Group name="name">
      <Form.Label>Name</Form.Label>
      <Select.Root {...args}>
        <Select.Option>Aardvark</Select.Option>
        <Select.Option>Cat</Select.Option>
        <Select.Option>Dog</Select.Option>
        <Select.Option>Kangaroo</Select.Option>
        <Select.Option>Panda</Select.Option>
        <Select.Option>Snake</Select.Option>
      </Select.Root>
      <Form.Feedback type="error">an error occured</Form.Feedback>
    </Form.Group>
  </Form.Root>
)

UsingForm.args = {
  ...defaultProps,
}

export default Component
