import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import icons from '../icons'
import Icon from '../components/Icon'
import { signOut } from '../actions/auth'

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

const IconWraper = styled(Icon)`
  font-size: 18px;
  margin-right: 10px;
  vertical-align: middle;
`

class Menu extends Component {
  signOut = () => {
    const { signOut, history } = this.props

    signOut()
  }

  render() {
    const { toggleMenu, auth, api: { profile }} = this.props

    return (
      <Wrapper>
        <Header>
          <Photo src={profile.avatarUrl} />
          <Name>{profile.displayName}</Name>
          <Role>Usuáro</Role>
        </Header>

        <LinkWrapper to="/spots/list" onClick={toggleMenu}>
          <IconWraper icon={icons.skateboarder} />
          Todos os picos
        </LinkWrapper>

        {
          auth.isAdmin &&
          <LinkWrapper to="/spots/analyze" onClick={toggleMenu}>
            <IconWraper icon={icons.configuration} />
            Analisar pico
          </LinkWrapper>
        }

        <LinkWrapper to="/spots/new" onClick={toggleMenu}>
          <IconWraper icon={icons.plus} />
          Adicionar novo pico
        </LinkWrapper>

        <LinkWrapper to="" onClick={toggleMenu}>
          <IconWraper icon={icons.trophy} />
          Campeonatos
        </LinkWrapper>

        <LinkWrapper to="" onClick={toggleMenu}>
          <IconWraper icon={icons.shopping} />
          Skateshops
        </LinkWrapper>

        <LinkWrapper to="/" onClick={this.signOut}>
          <IconWraper icon={icons.logout} />
          Sair
        </LinkWrapper>
      </Wrapper>
    )
  }
}

const mapActionsToProps = (dispatch, { firebase }) => ({
  signOut: () => dispatch(signOut(firebase))
})

const mapStateToProps = ({ api, auth }) => ({
  api,
  auth
})

export default connect(mapStateToProps, mapActionsToProps)(Menu)
