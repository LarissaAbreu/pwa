import * as React from 'react'
import {ThunkDispatch} from "redux-thunk";
import { connect } from 'react-redux'
import styled from 'styled-components'

import {Signed, signInWithSocial} from '../actions/auth'

import Button from '../components/Button/index'

import * as background from '../../src/statics/images/2.jpg'
import {DependenciesContainerType} from "../types";
import {Actionable} from "../actions/types";

type LandingExtraProps = {
  signInWithSocial: () => void
}

type LandingProps = DependenciesContainerType & LandingExtraProps

export type LandingState = LandingProps

export type LandingDispatch = ThunkDispatch<LandingState, undefined, Actionable<Signed>>

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
      <div className="landing">
        <Home>
          <Title>
            Em breve, encontre e compartilhe novos picos para sua sessão.
          </Title>
        </Home>

        <div className="home">
          <div className="home__header">
            <img
              className="home__logo"
              src="../static/images/logo.svg"
              alt="Ondetempico"
            />

            <div className="home__sign">
              <Button
                color="secondary"
                size="medium"
                onClick={this.props.signInWithSocial}
              >
                Entrar
              </Button>
            </div>
          </div>

          <div className="home__body" />
        </div>

        <div className="spots">
          <div className="spots__image" />

          <div className="spots__explanation">
            <h2 className="spots__title">Encontre diversos picos</h2>
            <p className="spots__description">
              De maneira colaborativa, skatistas compartilharem picos (locais
              para se praticar o esporte) para que haja troca de conhecimento
              entre estes, com características do local, sendo pago ou público,
              street e outras modalidades.
            </p>
          </div>
        </div>

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
      </div>
    )
  }
}

const mapActionsToProps = (dispatch: LandingDispatch, { firebase }): LandingExtraProps => ({
  signInWithSocial: () => dispatch(signInWithSocial(firebase))
})

const mapStateToProps = (state: LandingState): LandingState => state

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Landing)
