import React, { useState, ReactNode } from 'react'
import { connect } from 'react-redux'

import { styled } from '../theme'

import { Dependencies } from '../types'
import Menu from '../components/Menu'

const MainWrapper = styled.div`
  display: flex;
`

const Container = styled.div`
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

interface Props extends Dependencies {
  children: ReactNode
}

function Content({ children, history }: Props) {
  const [isMenuShowing, setShowMenu] = useState(true)

  const toggleMenu = () => setShowMenu(!isMenuShowing)

  console.log(isMenuShowing)

  return (
    <MainWrapper>
      {isMenuShowing && <Menu toggleMenu={toggleMenu} history={history} />}

      <Container>
        <Bar>
          {/* <IconWrapper icon={icons.menu} onClick={toggleMenu} /> */}
        </Bar>
        {children}
      </Container>
    </MainWrapper>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Content)
