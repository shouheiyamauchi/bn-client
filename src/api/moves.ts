import axios from 'axios'
import config from '~src/config'
import { getAuthHeader } from '~src/helpers/auth'

interface MoveApi {
  archived: boolean
  created: string
  description: string
  draft: boolean
  multimedia: string[]
  name: string
  tags: string[]
  transitionsIn: string[]
  transitionsOut: string[]
  updated: string
  user: string
  _id: string
}

export const create = ({
  description,
  draft,
  multimedia,
  name,
  tags
}: {
  description: string
  draft: boolean
  multimedia: string[]
  name: string
  tags: string[]
}) =>
  axios.post<{ data: MoveApi }>(
    `${config.API}/moves`,
    {
      description,
      draft,
      multimedia,
      name,
      tags
    },
    {
      headers: {
        Authorization: getAuthHeader()
      }
    }
  )
