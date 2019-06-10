import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '~src/containers/App/App'
import { AccountProvider } from '~src/contexts/Account/Account'
import { CategoriesProvider } from '~src/contexts/Categories/Categories'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <AccountProvider>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </AccountProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
