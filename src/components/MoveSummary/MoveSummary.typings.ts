import { Tag } from '../TagsContainer/TagsContainer.typings'

export interface MoveSummaryProps extends MoveData {
  editing?: boolean
  parentId: string
}

export interface MoveData {
  description: string
  id: string
  name: string
  tags: Tag[]
}
