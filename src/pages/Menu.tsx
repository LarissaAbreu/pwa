import * as React from 'react'
import { Action } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'

import { styled } from '../theme'

import { doSignOut } from '../actions/auth'
import { DependenciesContainerType } from '../types'

const Header = styled.div`
  text-align: center;
  background: ${props => props.theme.colors.secondary};
  padding: 20px 0;
`

const Wrapper = styled.div`
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
  color: ${props => props.theme.colors.primary};
  font-weight: 400;
`

const Role = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
`

const LinkWrapper = styled(Link)`
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  display: block;
  font-weight: 500;
  padding: 15px 20px;
  cursor: pointer;
  text-decoration: none;
`

type Actions = {
  signOutWhenClicked
}

type Props = Actions &
  DependenciesContainerType & {
    toggleMenu: () => void
  }

export type State = Props
export type Dispatch = ThunkDispatch<State, undefined, Action>

function Menu(props) {
  const signOutWhenClicked = (): void => {
    const { signOutWhenClicked, history } = props

    signOutWhenClicked()
  }

  const { toggleMenu, auth } = props

  return (
    <Wrapper>
      <Header>
        <Photo src="{profile.avatarUrl}" />
        <Name />
        <Role>Administrador</Role>
      </Header>

      <LinkWrapper to="/spots/analyze" onClick={toggleMenu}>
        Analisar pico
      </LinkWrapper>

      <LinkWrapper to="/" onClick={signOutWhenClicked}>
        Sair
      </LinkWrapper>
    </Wrapper>
  )
}

const mapActionsToProps = (dispatch: Dispatch): Actions => ({
  signOutWhenClicked: dispatch(doSignOut())
})

const mapStateToProps = ({ auth }: DependenciesContainerType) => ({
  auth
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Menu)
