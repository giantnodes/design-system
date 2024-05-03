import type { SelectProps } from '@/components/select'
import type { Meta, StoryFn } from '@storybook/react'

import { select } from '@giantnodes/theme'

import { Form } from '@/components/form'
import { Select } from '@/components/select'

const Component: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
  <Select {...args}>
    <Select.Option>Aardvark</Select.Option>
    <Select.Option>Cat</Select.Option>
    <Select.Option>Dog</Select.Option>
    <Select.Option>Kangaroo</Select.Option>
    <Select.Option>Panda</Select.Option>
    <Select.Option>Snake</Select.Option>
  </Select>
)

Default.args = {
  ...defaultProps,
}

export const UsingForm: StoryFn<SelectProps<object>> = (args) => (
  <Form>
    <Form.Group name="name">
      <Form.Label>Name</Form.Label>
      <Select {...args}>
        <Select.Option>Aardvark</Select.Option>
        <Select.Option>Cat</Select.Option>
        <Select.Option>Dog</Select.Option>
        <Select.Option>Kangaroo</Select.Option>
        <Select.Option>Panda</Select.Option>
        <Select.Option>Snake</Select.Option>
      </Select>
      <Form.Feedback type="error">an error occured</Form.Feedback>
    </Form.Group>
  </Form>
)

UsingForm.args = {
  ...defaultProps,
}

export default Component
