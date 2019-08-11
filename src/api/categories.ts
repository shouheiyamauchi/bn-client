import axios from 'axios'
import config from '~src/config'
import { getAuthHeader } from '~src/helpers/auth'

interface CategoryApi {
  color: string
  created: string
  name: string
  tags: Array<{
    category: string
    created: string
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

export const create = ({ color, name }: { color: string; name: string }) =>
  axios.post(
    `${config.API}/categories`,
    {
      color,
      name
    },
    {
      headers: {
        Authorization: getAuthHeader()
      }
    }
  )

export const update = ({
  color,
  id,
  name
}: {
  color: string
  id: string
  name: string
}) =>
  axios.put(
    `${config.API}/categories/${id}`,
    {
      color,
      name
    },
    {
      headers: {
        Authorization: getAuthHeader()
      }
    }
  )
