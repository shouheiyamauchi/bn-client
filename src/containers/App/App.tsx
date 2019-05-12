import 'antd/dist/antd.css'
import React from 'react'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router-dom'
import { CategoriesProvider } from '~src/contexts/Categories/Categories'
import { GlobalStyle } from '~src/styles/global'

import Categories from '../Categories/Categories'
import Header from '../Header/Header'
import Move from '../Move/Move'

import * as s from './App.styled'

const App: React.FC<RouteComponentProps> = ({ history }) => {
  React.useEffect(() => {
    const unlisten = history.listen((_, action) => {
      if (action === 'PUSH') {
        window.scrollTo(0, 0)
      }
    })

    return () => unlisten()
  }, [])

  return (
    <>
      <CategoriesProvider>
        <GlobalStyle />
        <Header />
        <s.Container>
          <Switch>
            <Route path="/" exact={true} component={Categories} />
            <Route path="/categories/:id" component={Categories} />
            <Route path="/moves/:pageId" component={Move} />
          </Switch>
        </s.Container>
      </CategoriesProvider>
    </>
  )
}

export default withRouter(App)
