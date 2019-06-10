import { Icon, Menu } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import SideNav from '~src/components/SideNav/SideNav'
import { AccountContext } from '~src/contexts/Account/Account'

import * as s from './Header.styled'

const Header: React.FC = () => {
  const { logout } = React.useContext(AccountContext)
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <>
      <SideNav onClickOutside={toggleMenu} show={showMenu}>
        <Menu.ItemGroup
          key="g1"
          title={
            <>
              <Icon type="mail" />
              &nbsp;Items
            </>
          }
        >
          <Menu.Item key="111" onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="112" onClick={toggleMenu}>
            <Link to="/moves/123">Move 123</Link>
          </Menu.Item>
          <Menu.Item key="113" onClick={toggleMenu}>
            <Link to="/categories/123">Category 123</Link>
          </Menu.Item>
          <Menu.Item key="114" onClick={toggleMenu}>
            <Link to="/categories/1234">Category 1234</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup
          key="g2"
          title={
            <>
              <Icon type="mail" />
              &nbsp;Account
            </>
          }
        >
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <Menu.Item
            key="115"
            onClick={() => {
              logout()
              toggleMenu()
            }}
          >
            Logout
          </Menu.Item>
        </Menu.ItemGroup>
      </SideNav>
      <s.Container>
        <s.HeaderTextContainer onClick={toggleMenu}>
          <Icon style={{ fontSize: '11px' }} type="fire" />
          <s.HeaderText>&nbsp;Breakinotes</s.HeaderText>
        </s.HeaderTextContainer>
      </s.Container>
      <s.Padding />
    </>
  )
}

export default Header
