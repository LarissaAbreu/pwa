import * as React from 'react'
import { Action } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'

import { styled } from '../theme'

import { doSignOut } from '../store/actions/auth'
import { Dependencies } from '../types'
import { Animation } from './Animation'

const Header = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 20px 0;
`

const Container = styled(Animation)`
  width: 100%;
  max-width: 250px;
  min-height: 100vh;
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
`

const Name = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  margin-top: 15px;
`

const Role = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`

const Linkable = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  display: block;
  font-weight: 500;
  padding: 15px 20px;
  cursor: pointer;
  text-decoration: none;
`

type Actions = {
  signOutWhenClicked
}

interface Props extends Actions, Dependencies {
  toggleSidebar: () => void
}

export type State = Props
export type Dispatch = ThunkDispatch<State, undefined, Action>

function Sidebar({
  toggleSidebar,
  auth,
  signOutWhenClicked,
  history,
  ...props
}) {
  return (
    <Container {...props}>
      <Header>
        <Photo src={auth.photoURL} />
        <Name>{auth.displayName}</Name>
        <Role>Administrador</Role>
      </Header>

      <Linkable to="/analyze" onClick={toggleSidebar}>
        Analisar pico
      </Linkable>

      <Linkable to="/" onClick={signOutWhenClicked}>
        Sair
      </Linkable>
    </Container>
  )
}

const mapActionsToProps = (dispatch: Dispatch): Actions => ({
  signOutWhenClicked: () => dispatch(doSignOut())
})

const mapStateToProps = ({ auth }: Dependencies) => ({
  auth
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Sidebar)
