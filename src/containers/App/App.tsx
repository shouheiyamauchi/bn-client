import 'antd/dist/antd.css'
import React from 'react'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router-dom'
import Loading from '~src/components/Loading/Loading'
import { AccountContext, USER_TOKEN_KEY } from '~src/contexts/Account/Account'
import { GlobalStyle } from '~src/styles/global'

import Header from '../Header/Header'
import Login from '../Login/Login'
import Move from '../Move/Move'
import NestedCategories from '../NestedCategories/NestedCategories'
import NewMove from '../NewMove/NewMove'

import * as s from './App.styled'

const App: React.FC<RouteComponentProps> = ({ history }) => {
  const { setUserToken, userToken } = React.useContext(AccountContext)

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const storedToken = localStorage.getItem(USER_TOKEN_KEY)
    if (storedToken) {
      setUserToken(storedToken)
    }
    setLoading(false)
  }, [])

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
      <GlobalStyle />
      <Loading show={loading} />
      {loading ? (
        <></>
      ) : !userToken ? (
        <Login />
      ) : (
        <>
          <Header />
          <s.Container>
            <Switch>
              <Route path="/" exact={true} component={NestedCategories} />
              <Route path="/categories/:id" component={NestedCategories} />
              <Route path="/moves/new" component={NewMove} />
              <Route path="/moves/:moveId" component={Move} />
            </Switch>
          </s.Container>
        </>
      )}
    </>
  )
}

export default withRouter(App)
