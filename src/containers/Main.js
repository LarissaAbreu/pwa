import React, { Component } from 'react'

import Menu from '../pages/Menu'

class Main extends Component {
  constructor() {
    super()

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    const close = () => {
      menu.classList.remove(MENU_HIDDEN_MODIFIER)
      content.classList.remove(CONTENT_MODIFIER)
    }

    const open = () => {
      menu.classList.add(MENU_HIDDEN_MODIFIER)
      content.classList.add(CONTENT_MODIFIER)
    }

    const MENU_HIDDEN_MODIFIER = 'menu--hidden'
    const CONTENT_MODIFIER = 'content--fullable'

    let menu = document.querySelector('.menu')
    let content = document.querySelector('.content')

    return menu.classList.contains(MENU_HIDDEN_MODIFIER)
      ? close()
      : open()
  }

  render() {
    return (
      <div className="main">
        <Menu />

        <div className="content">
            <div className="bar">
            <i className="icon fa fa-bars" onClick={this.toggleMenu}></i>
          </div>

          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
