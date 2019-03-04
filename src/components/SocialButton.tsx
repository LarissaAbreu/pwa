import * as React from 'react'
import { styled } from '../theme'

const Button = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    animation: bounce 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

type Props = {
  address: string
  children: React.ReactNode
}

export const SocialButton: React.SFC<Props> = ({
  address,
  children
}: Props) => (
  <Button href={address} rel="noopener noreferrer" target="_blank">
    {children}
  </Button>
)
