import type { SelectProps } from '@/components/select'
import type { Meta, StoryFn } from '@storybook/react'

import { Form } from '@/components/form'
import { Select } from '@/components/select'

const Component: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
}

const defaultProps = {}

export const Default: StoryFn = (args: SelectProps<object>) => (
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

export const UsingForm: StoryFn = (args: SelectProps<object>) => (
  <Form>
    <Form.Group>
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
