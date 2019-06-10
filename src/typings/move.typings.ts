import { Tag } from '../components/TagsContainer/TagsContainer.typings'

export interface MoveData {
  description: string
  id: string
  name: string
  tags: Tag[]
  transitionsIn?: MoveData[]
  transitionsOut?: MoveData[]
}
