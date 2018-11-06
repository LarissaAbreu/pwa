import React from 'react'

import icons from '../../icons'

import Label from '../ui/Opcionable/Label'
import Group from '../ui/Opcionable/Group'
import Input from '../ui/Opcionable/Input'
import IconWrapper from '../ui/Opcionable/IconWrapper'

const Checkbox = ({ id, text, ...props }) => {
  return (
    <Group>
      <Input
        id={id}
        name={id}
        {...props}
        type="checkbox" />

      <Label htmlFor={id}>
        {text}

        <IconWrapper icon={icons.check} />
      </Label>
    </Group>
  )
}

export default Checkbox
