import React from 'react'
import { SelectStateContext, SelectValue } from 'react-aria-components'

import { useSelectContext } from '@/components/select/use-select.hook'

const Component: React.FC = () => {
  const { selectedItem } = React.useContext(SelectStateContext)
  const { slots } = useSelectContext()

  const render = React.useMemo(() => {
    if (selectedItem?.textValue) return selectedItem.textValue

    return <SelectValue className={slots.placeholder()} />
  }, [selectedItem?.textValue, slots])

  return render
}

export default Component
