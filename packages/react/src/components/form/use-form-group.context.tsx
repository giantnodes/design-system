import type { UseFormGroupReturn } from '@/components/form/use-form-group.hook'

import { createContext } from '@/utilities/context'

export const [FormGroupProvider, useFormGroupContext] = createContext<UseFormGroupReturn>({
  name: 'FormGroupContext',
  strict: true,
  errorMessage: 'useFormGroupContext: `context` is undefined. Seems you forgot to wrap component within <Form.Group />',
})
