import * as React from 'react'
import Group from '../ui/Opcionable/Group'
import Label from '../ui/Opcionable/Label'
import Input from '../ui/Opcionable/Input'

const Upload = ({ id, text, ...props }) => {
  return (
    <Group>
      <Input
        id={id}
        multiple={true}
        accept="image/png, image/jpeg"
        type={`file`}
        {...props}
      />

      <Label htmlFor={id}>{text}</Label>
    </Group>
  )
}

export default Upload
