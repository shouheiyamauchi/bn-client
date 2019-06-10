import axios from 'axios'
import config from '~src/config'
import { getAuthHeader } from '~src/helpers/auth'

interface CategoryApi {
  color: string
  created: string
  description: string
  name: string
  tags: Array<{
    category: string
    created: string
    description: string
    name: string
    updated: string
    user: string
    _id: string
  }>
  updated: string
  _id: string
}

export const list = () =>
  axios.get<{ data: CategoryApi[] }>(`${config.API}/categories`, {
    headers: {
      Authorization: getAuthHeader()
    }
  })
