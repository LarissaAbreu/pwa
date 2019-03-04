import React, { ReactNode, memo } from 'react'

import { Button } from './Button'
import { styled } from '../theme'

const Overlay = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background: rgb(0, 0, 0, 0.8);
  position: relative;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50px;
`

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 30px;
  text-align: center;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`

const ConfirmButton = styled(Button)`
  margin-top: 10px;
`

type Props = {
  buttonWasClicked: (event: React.MouseEvent) => void
  children: ReactNode
}

export const Modal: React.FC<Props> = memo(
  ({ buttonWasClicked, children, ...props }: Props) => {
    return (
      <Overlay {...props}>
        <Container>
          {children}

          <ConfirmButton
            onClick={buttonWasClicked}
            size="medium"
            color="primary"
          >
            Ok 👌🏼
          </ConfirmButton>
        </Container>
      </Overlay>
    )
  }
)
