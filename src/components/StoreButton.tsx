import * as React from 'react'
import { styled } from '../theme';

const Button =  styled.div`
  cursor: not-allowed;
  color: ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 160px;
  height: 60px;
  width: 100%;

  &:hover {
    animation: bounce 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

const Text = styled.div`
  text-align: left;
  margin-left: 10px;
`

const Get = styled.span`
  font-size: 12px;
  display: block;
`

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`

export const StoreButton = ({ children, title }) => (
 <Button>
   {children}

    <Text>
      <Get>obtê-lo na</Get>

      <Title>{title}Store</Title>
    </Text>
 </Button>
)
