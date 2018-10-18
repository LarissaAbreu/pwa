import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import icons from '../icons'

import Menu from '../pages/Menu'
import Icon from '../components/Icon'

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

const IconWrapper = styled(Icon)`
  color: ${props => props.theme.colors.primary};
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: rem(24px);
`

class Main extends React.Component {
  state = {
    isMenuVisible: true
  }

  toggleMenu = () => {
    this.setState(({ isMenuVisible }) => ({
      isMenuVisible: !isMenuVisible
    }))
  }

  render() {
    const { firebase, history } = this.props
    const { isMenuVisible } = this.state

    return (
      <MainWrapper>
        {isMenuVisible && (
          <Menu
            toggleMenu={this.toggleMenu}
            firebase={firebase}
            history={history}
          />
        )}

        <Content>
          <Bar>
            <IconWrapper icon={icons.menu} onClick={this.toggleMenu} />
          </Bar>

          {this.props.children}
        </Content>
      </MainWrapper>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Main)
