import React, { useState, ReactNode } from 'react'
import { PoseGroup } from 'react-pose'
import { connect } from 'react-redux'

import { styled } from '../theme'

import { Animation } from '../components/Animation'

import { Dependencies } from '../types'
import Sidebar from '../components/Sidebar'
import { Hamburguer } from '../components/Icons/Hamburguer'

const Container = styled.div`
  display: flex;
`

const Resizable = styled(Animation)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const Navigation = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;
`

interface Props extends Dependencies {
  children: ReactNode
}

function Content({ children, history }: Props) {
  const [isShowing, setShowing] = useState(true)

  const toggleSidebar = () => setShowing(!isShowing)

  return (
    <Container>
      <PoseGroup>
        {isShowing && (
          <Sidebar
            key="sidebar"
            toggleSidebar={toggleSidebar}
            history={history}
          />
        )}

        <Resizable key="resizable">
          <Navigation>
            <Hamburguer color="primary" onClick={toggleSidebar} />
          </Navigation>

          {children}
        </Resizable>
      </PoseGroup>
    </Container>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Content)
