import { styled, css } from '../theme'

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

export const Button = styled.button`
  font-size: 15px;
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  cursor: pointer;
  background: ${props => props.theme.combinations[props.color].background};
  color: ${props => props.theme.combinations[props.color].color};
  ${(props: Props) => map[props.size]};

  &:hover {
    animation: bounce 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`
