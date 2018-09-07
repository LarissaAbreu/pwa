import styled, { css } from 'styled-components'

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

  ${props =>
    props.size === props.theme.sizes.full &&
    css`
      width: 100%;
      padding: 10px 20px;
    `
  };
`

export default Button
