import React, { useState, ReactNode } from 'react'
import { connect } from 'react-redux'

import { styled } from '../theme'

import { DependenciesContainerType } from '../types'

const MainWrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  width: 100%;
`

const Bar = styled.div`
  width: 100%;
  height: 50px;
  background: ${props => props.theme.colors.secondary};
  position: relative;
`

// const IconWrapper = styled(Icon)`
//   color: ${props => props.theme.colors.primary};
//   position: absolute;
//   left: 15px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   font-size: rem(24px);
// `

interface Props extends DependenciesContainerType {
  children: ReactNode
}

function Main(props: Props) {
  const [isMenuShowing, setShowMenu] = useState(true)

  const toggleMenu = () => setShowMenu(!isMenuShowing)

  const { history } = props

  return (
    <MainWrapper>
      {/* {isMenuShowing && (
          <Menu toggleMenu={toggleMenu} history={history} />
        )} */}

      <Content>
        <Bar>
          {/* <IconWrapper icon={icons.menu} onClick={toggleMenu} /> */}
        </Bar>

        {props.children}
      </Content>
    </MainWrapper>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Main)
