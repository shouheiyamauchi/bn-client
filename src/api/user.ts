import axios from 'axios'
import config from '~src/config'

export const login = (username: string, password: string) =>
  axios.post(`${config.API}/users/login`, {
    password,
    username
  })
