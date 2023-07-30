import type { UseFormReturn } from '@/components/form/use-form.hook'

import { createContext } from '@/utilities/context'

export const [FormProvider, useFormContext] = createContext<UseFormReturn>({
  name: 'FormContext',
  strict: true,
  errorMessage: 'useFromContext: `context` is undefined. Seems you forgot to wrap component within <Form />',
})
