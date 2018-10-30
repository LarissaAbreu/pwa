import * as React from 'react'
import { styled } from '../../theme'

const Group = styled.div`
  width: 100%;
  position: relative;
  padding: 0;
  border: none;
  overflow: visible;
  margin-bottom: 10px;
`

const Input = styled.input`
  width: 100%;
  padding: 0 5px;
  border: none;
  border-radius: 0;
  height: 40px;
  box-shadow: none;
  border-bottom: 1px solid ${props => props.theme.colors.fourth};
  outline: none;
  cursor: text;
  background: transparent;
  color: ${props => props.theme.colors.third};
  transition: 0.4s ease;
  font-size: 14px;

  &:focus ~ label,
  &:valid ~ label {
    top: -12px;
    font-size: 12px;
  }
`

const Label = styled.label`
  position: absolute;
  left: 5px;
  top: 12px;
  color: ${props => props.theme.colors.third};
  pointer-events: none;
  transition: 0.2s ease-out;
  font-size: 14px;
`

export default ({ text, id, ...props }) => (
  <Group>
    <Input id={id} name={id} type="text" {...props} />
    <Label htmlFor={id}>{text}</Label>
  </Group>
)
