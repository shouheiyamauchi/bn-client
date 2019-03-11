import React from 'react'
import SideNav from '~src/components/SideNav/SideNav'
import { GlobalStyle } from '~src/styles/global'

import * as s from './App.styled'

class App extends React.Component {
  public state = {
    showMenu: false
  }

  public toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  public render() {
    const { showMenu } = this.state

    return (
      <>
        <GlobalStyle />
        <SideNav onClickOutside={this.toggleMenu} show={showMenu} />
        <s.Container onClick={this.toggleMenu}>Breakinotes</s.Container>
      </>
    )
  }
}

export default App
