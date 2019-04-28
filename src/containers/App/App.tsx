import { Icon, Menu } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Category from '~src/components/Category/Category'
import Header from '~src/components/Header/Header'
import SideNav from '~src/components/SideNav/SideNav'
import { GlobalStyle } from '~src/styles/global'

import * as s from './App.styled'

/* tslint:disable:object-literal-sort-keys */
const data = {
  id: 'movetype',
  name: 'Move Type',
  tags: [
    {
      id: 'footwork',
      name: 'Footwork',
      childrenCategory: [
        {
          id: 'concept',
          name: 'Concept',
          tags: [
            {
              id: 'hook',
              name: 'Hook',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 222',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            },
            {
              id: 'jump',
              name: 'Jump',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            },
            {
              id: 'none',
              name: 'None',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      moves: []
    },
    {
      id: 'powermove',
      name: 'Powermove',
      childrenCategory: [
        {
          id: 'concept',
          name: 'Concept',
          tags: [
            {
              id: 'hook',
              name: 'Hook',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            },
            {
              id: 'jump',
              name: 'Jump',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            },
            {
              id: 'none',
              name: 'None',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      moves: []
    },
    {
      id: 'none',
      name: 'None',
      childrenCategory: [
        {
          id: 'concept',
          name: 'Concept',
          tags: [
            {
              id: 'hook',
              name: 'Hook',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            },
            {
              id: 'jump',
              name: 'Jump',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            },
            {
              id: 'none',
              name: 'None',
              childrenCategory: [],
              moves: [
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description 2',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                },
                {
                  description: 'This is some sort of description',
                  id: '1',
                  name: 'Some Move',
                  tags: [
                    { color: 'pink', id: 'abc', name: 'yes' },
                    { color: 'blue', id: 'def', name: 'no' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      moves: []
    }
  ]
}
/* tslint:enable:object-literal-sort-keys */

const App: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <Router>
      <GlobalStyle />
      <SideNav onClickOutside={toggleMenu} show={showMenu}>
        <Menu.SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="111">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="112">
              <Link to="/test">Test</Link>
            </Menu.Item>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </Menu.SubMenu>
      </SideNav>
      <Header>
        <s.HeaderTextContainer onClick={toggleMenu}>
          <Icon style={{ fontSize: '11px' }} type="fire" />
          <s.HeaderText>&nbsp;Breakinotes</s.HeaderText>
        </s.HeaderTextContainer>
      </Header>
      <s.Container>
        <Route
          path="/"
          exact={true}
          render={(props) => <Category {...props} {...data} />}
        />
        <Route
          path="/test"
          render={(props) => <Category {...props} {...data} />}
        />
      </s.Container>
    </Router>
  )
}

export default App
