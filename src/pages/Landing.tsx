/// <reference path='../types.d.ts'/>

import React, { useEffect } from 'react'
import * as ReactGA from 'react-ga'
import { connect } from 'react-redux'

import { Button } from '../components/Button'

import { Dependencies } from '../types'

import * as background from '../statics/images/background.jpg'
import * as logo from '../statics/images/logo.png'
import * as heart from '../statics/images/heart.png'

import { styled } from '../theme'
import { Container } from '../components/Container'
import { Apple } from '../components/Icons/Apple'
import { StoreButton } from '../components/StoreButton'
import { Android } from '../components/Icons/Android'
import { Facebook } from '../components/Icons/Facebook'
import { Instagram } from '../components/Icons/Instagram'
import { SocialButton } from '../components/SocialButton'
import { doSignInAtProvider } from '../store/actions/auth'

type Actions = {
  doSignIn
}

interface Props extends Dependencies, Actions {}

export type State = Props

const Home = {
  Background: styled.div`
    width: 100%;
    height: 100vh;
    background: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `,

  Logo: styled.img`
    max-width: 80px;
  `,

  Button: styled(Button)`
    @media (max-width: 768px) {
      display: none;
    }
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    ${Container}

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  Title: styled.h1`
    padding-top: 110px;
    max-width: 800px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    font-size: 50px;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 45px;
    }
  `,

  Body: styled.div`
    height: calc(100% - 110px);
    ${Container}
  `
}

const Explanation = {
  Background: styled.div`
    text-align: center;
    min-height: 100vh;
    padding-top: 120px;
    padding-bottom: 40px;
  `,
  Subtitle: styled.h2`
    font-size: 50px;
    color: ${props => props.theme.colors.secondary};
    padding-bottom: 70px;
  `,

  Text: styled.p`
    color: ${props => props.theme.colors.secondary};
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 2px;
    max-width: 760px;
    margin: 0 auto 15px auto;
  `,

  Heart: styled.img`
    vertical-align: middle;
    margin-left: 5px;
  `
}

const Details = {
  Background: styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${props => props.theme.colors.secondary};
    text-align: center;
    padding-top: 120px;
    padding-bottom: 40px;
  `,

  Subtitle: styled.h2`
    font-size: 50px;
    color: ${props => props.theme.colors.primary};
    padding-bottom: 70px;
  `,

  Stores: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 600px;
    margin: 0 auto;
  `,

  Follow: styled.p`
    font-size: 16px;
    color: ${props => props.theme.colors.primary};
    letter-spacing: 2px;
    margin: 150px auto 20px auto;
  `,

  Networks: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 200px;
    margin: 0 auto;
    width: 100%;
  `
}

const Footer = styled.div`
  background: ${props => props.theme.colors.primary};
`

function Landing({ history, auth, doSignIn }) {
  const { isAuthenticated, isAdmin } = auth

  ReactGA.pageview(window.location.origin)

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      history.push('/analyze')
    }
  })

  return (
    <>
      <Home.Background>
        <Home.Header>
          <Home.Logo src={logo} alt="Ondetempico" />

          <Home.Button color="secondary" size="medium">
            Obter aplicativo
          </Home.Button>
        </Home.Header>

        <Home.Body>
          <Home.Title>
            Vamos ajudar o carrinho, compartilhe e encontre novos picos para o
            rolê.
          </Home.Title>
        </Home.Body>
      </Home.Background>

      <Explanation.Background>
        <Explanation.Subtitle>Nosso propósito?</Explanation.Subtitle>

        <Explanation.Text>
          Com o Ondetempico, que é o nosso app, tanto você como seus amigos
          podem compartilhar a localização de um pico daora, desde uma pista ou
          até aquele corrimão da rua.
        </Explanation.Text>

        <Explanation.Text>
          Tem mais, o app é totalmente sem fins lucrativos, queremos apenas
          fortalecer o skateboard
          <Explanation.Heart src={heart} alt="Ícone de coração" />
        </Explanation.Text>

        <Explanation.Text>
          Além dos picos, você fica sabendo aonde encontra lojas especilizadas
          no carrinho, quando e onde ocorre os campeonatos da cena. Você pode
          baixar o app descendo um pouco mais abaixo.
        </Explanation.Text>
      </Explanation.Background>

      <Details.Background>
        <Details.Subtitle>Em breve disponível</Details.Subtitle>

        <Details.Stores>
          <StoreButton title="Play">
            <Android color="secondary" />
          </StoreButton>

          <StoreButton title="App">
            <Apple color="secondary" />
          </StoreButton>
        </Details.Stores>

        <Details.Follow>Aproveite, siga nossas redes</Details.Follow>

        <Details.Networks>
          <SocialButton address="https://facebook.com/ondetempico" title="Acompanhe-nos no Facebook">
            <Facebook color="secondary" />
          </SocialButton>

          <SocialButton address="https://instagram.com/ondetempico" title="Siga-nos no Instagram">
            <Instagram color="secondary" />
          </SocialButton>
        </Details.Networks>
      </Details.Background>

      <Footer>
        <a onClick={doSignIn}>Entrar</a>
        <p>Projeto Ondetempico, sem fins lucrativos.</p>
      </Footer>
    </>
  )
}

const mapStateToProps = state => state

const mapActionsToProps = dispatch => ({
  doSignIn: () => dispatch(doSignInAtProvider())
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Landing)
