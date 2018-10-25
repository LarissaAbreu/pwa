import * as React from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

import { Signed, signInWithSocial } from '../actions/auth'

import Button from '../components/Button'

import { DependenciesContainerType } from '../types'
import { Actionable } from '../actions/types'

import * as background from '../../src/statics/images/2.jpg'
import * as spot from '../../src/statics/images/4.jpg'

import { styled, css } from '../theme'
import Container from '../components/Shared/Container'
import { MenuState } from './Menu'

type LandingActions = {
  signInWithSocial: () => void
}

type LandingProps = LandingActions & DependenciesContainerType

export type LandingState = LandingProps

export type LandingDispatch = ThunkDispatch<
  MenuState,
  undefined,
  Actionable<Signed>
>

const Home = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Title = styled.h1`
  max-width: 500px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  font-size: 54px;
  letter-spacing: 1px;
`

const Logo = styled.img`
  max-width: 80px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  ${Container};
`

const Spots = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  ${Container};
`

const Spot = css`
  width: 100%;
  max-width: 50%;
  margin-top: 50px;
  margin-bottom: 50px;
`

const SpotImage = styled.img`
  background-image: url(${spot});
  background-size: cover;
  background-position: center;
  margin-right: 50px;
  ${Spot};
`

const SpotExplanation = styled.div`
  margin-left: 50px;
  ${Spot};
`

const SpotTitle = styled.h2`
  font-size: 35px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`

const SpotDescription = styled.p`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`

class Landing extends React.Component<LandingProps, LandingState> {
  componentDidMount(): void {
    const { history, auth } = this.props

    if (auth.authenticated) {
      history.push('/spots/list')
    }
  }

  componentDidUpdate(prevProps): void {
    const { history, auth } = this.props

    if (auth.authenticated && !prevProps.auth.authenticated) {
      history.push('/spots/list')
    }
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <Home>
          <Title>
            Em breve, encontre e compartilhe novos picos para sua sessão.
          </Title>

          <Header>
            <Logo
              className="home__logo"
              src="../static/images/logo.svg"
              alt="Ondetempico"
            />
            <Button
              color="secondary"
              size="medium"
              onClick={this.props.signInWithSocial}
            >
              Entrar
            </Button>
          </Header>
        </Home>

        <Spots>
          <SpotImage />

          <SpotExplanation>
            <SpotTitle>Encontre diversos picos</SpotTitle>

            <SpotDescription>
              De maneira colaborativa, skatistas compartilharem picos (locais
              para se praticar o esporte) para que haja troca de conhecimento
              entre estes, com características do local, sendo pago ou público,
              street e outras modalidades.
            </SpotDescription>
          </SpotExplanation>
        </Spots>

        <div className="socials">
          <h2 className="socials__title">Siga nossas redes</h2>

          <a
            className="socials__icon icon--facebook"
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com/ondetempico"
          />

          <a
            className="socials__icon icon--instagram"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/ondetempico"
          />
        </div>
      </React.Fragment>
    )
  }
}

const mapActionsToProps = (
  dispatch: LandingDispatch,
  { firebase }
): LandingActions => ({
  signInWithSocial: () => dispatch(signInWithSocial(firebase))
})

const mapStateToProps = (state: LandingState): LandingState => state

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Landing)
