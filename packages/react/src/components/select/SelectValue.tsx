import React from 'react'
import { SelectValue as Component, SelectStateContext } from 'react-aria-components'

import { useSelectContext } from '@/components/select/use-select.hook'

const SelectValue: React.FC = () => {
  const { selectedItem } = React.useContext(SelectStateContext)
  const { slots } = useSelectContext()

  const render = React.useMemo(() => {
    if (selectedItem?.textValue) return selectedItem.textValue

    return <Component className={slots.placeholder()} />
  }, [selectedItem?.textValue, slots])

  return render
}

export default SelectValue
