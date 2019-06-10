import { Button, Form, Input, Modal } from 'antd'
import React from 'react'
import * as userApi from '~src/api/user'
import { AccountContext, USER_TOKEN_KEY } from '~src/contexts/Account/Account'

const Login: React.FC = () => {
  const { setUserToken } = React.useContext(AccountContext)

  const [userInput, setUserInput] = React.useState('')
  const [passInput, setPassInput] = React.useState('')
  const [loggingIn, setLoggingIn] = React.useState(false)
  const [error, setError] = React.useState(false)

  const login = (username: string, password: string) => {
    setLoggingIn(true)
    setError(false)

    userApi
      .login(username, password)
      .then(({ data: { data } }) => {
        setLoggingIn(false)
        localStorage.setItem(USER_TOKEN_KEY, data)
        setUserToken(data)
      })
      .catch(() => {
        setLoggingIn(false)
        setError(true)
      })
  }

  return (
    <Modal
      centered={true}
      closable={false}
      title="Login to Breakinotes"
      visible={true}
      footer={
        <Button
          loading={loggingIn}
          key="submit"
          type="primary"
          onClick={() => login(userInput, passInput)}
        >
          Login
        </Button>
      }
    >
      <Form>
        <Form.Item
          validateStatus={error ? 'error' : ''}
          help={error ? 'Invalid username and password combination' : ''}
        >
          <Input
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Username"
            value={userInput}
          />
          <br />
          <Input.Password
            onChange={(e) => setPassInput(e.target.value)}
            placeholder="Password"
            value={passInput}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Login
