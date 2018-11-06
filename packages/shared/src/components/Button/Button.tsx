import { styled, css } from '../../theme'

type Sizes = 'large' | 'medium' | 'small'
type Colors = 'primary' | 'secondary'

type Props = {
  size: Sizes
  color: Colors
}

const large = css`
  width: 100%;
  padding: 10px 40px;
`

const medium = css`
  padding: 10px 30px;
`

const small = css`
  padding: 5px 20px;
`

const map = {
  large,
  medium,
  small
}

const Button = styled.button`
  font-size: 14px;
  letter-spacing: 1px;
  border: none;
  border-radius: 50px;
  font-weight: 400;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  background: ${props => props.theme.combinations[props.color].background};
  color: ${props => props.theme.combinations[props.color].color};
  ${(props: Props) => map[props.size]};
`

export default Button
