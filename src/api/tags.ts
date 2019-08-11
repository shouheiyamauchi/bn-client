import axios from 'axios'
import config from '~src/config'
import { getAuthHeader } from '~src/helpers/auth'

interface TagApi {
  category: {
    color: string
    created: string
    name: string
    updated: string
    _id: string
  }
  created: string
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

export const create = ({
  category,
  name
}: {
  category: string
  name: string
}) =>
  axios.post(
    `${config.API}/tags`,
    {
      category,
      name
    },
    {
      headers: {
        Authorization: getAuthHeader()
      }
    }
  )

export const update = ({
  category,
  id,
  name
}: {
  category: string
  id: string
  name: string
}) =>
  axios.put(
    `${config.API}/tags/${id}`,
    {
      category,
      name
    },
    {
      headers: {
        Authorization: getAuthHeader()
      }
    }
  )
