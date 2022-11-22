import React from 'react'
import { Select } from '@chakra-ui/react'

const CustomSelectBox = ({ options, selected }) => {
  return (
    <Select defaultValue={selected}>
      {options.map((option) => (
        <option key={option.value} value={options.value}>
          {option.name}
        </option>
      ))}
    </Select>
  )
}

export default CustomSelectBox
