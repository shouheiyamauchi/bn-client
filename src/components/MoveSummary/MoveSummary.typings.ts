import { Tag } from '../TagsContainer/TagsContainer.typings'

export interface MoveSummaryProps extends MoveData {
  parentId: string
}

export interface MoveData {
  description: string
  id: string
  name: string
  tags: Tag[]
}
