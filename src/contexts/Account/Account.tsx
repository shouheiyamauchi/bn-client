import * as React from 'react'

import { AccountContextState } from './Account.typings'

const stateTemplate = {}

export const AccountContext = React.createContext(
  stateTemplate as AccountContextState
)

export const USER_TOKEN_KEY = 'userToken'

export class AccountProvider extends React.Component<{}, AccountContextState> {
  public constructor(props: {}) {
    super(props)

    this.state = {
      logout: this.logout,
      setUserToken: this.setUserToken,
      userToken: ''
    }
  }

  public setUserToken = (userToken: string) => {
    this.setState({ userToken })
  }

  public logout = () => {
    this.setState({ userToken: '' })
    localStorage.setItem(USER_TOKEN_KEY, '')
  }

  public render() {
    return (
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
}
