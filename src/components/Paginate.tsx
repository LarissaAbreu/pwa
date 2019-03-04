import React, { memo } from 'react'
import styled from 'styled-components'
import { default as Paginable } from 'react-paginate'
import { Button } from './Button'

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 30px;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
  }

  li:not(.previous):not(.next) {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  li.active {
    background-color: #000;
    color: #fff;
  }
`

const Paginate = props => (
  <Container>
    <Paginable
      {...props}
      previousLabel={
        <Button color="primary" size="small">
          👈🏼 Anterior
        </Button>
      }
      nextLabel={
        <Button color="primary" size="small">
          Próximo 👉🏼
        </Button>
      }
    />
  </Container>
)

export default memo(Paginate)
