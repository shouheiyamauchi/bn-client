import axios from 'axios'
import config from '~src/config'
import { getAuthHeader } from '~src/helpers/auth'

interface TagApi {
  category: {
    color: string
    created: string
    description: string
    name: string
    updated: string
    _id: string
  }
  created: string
  description: string
  name: string
  updated: string
  user: string
  _id: string
}

export const list = () =>
  axios.get<{ data: TagApi[] }>(`${config.API}/tags`, {
    headers: {
      Authorization: getAuthHeader()
    }
  })
