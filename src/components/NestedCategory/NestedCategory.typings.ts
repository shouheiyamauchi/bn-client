import { MoveData } from '../../typings/move.typings'

export interface NestedCategoryProps extends NestedCategoryData {
  pageId: string
  parentId: string
}

export interface NestedCategoryData {
  id: string
  name: string
  tags: NestedCategoryTag[]
}

interface NestedCategoryTag {
  id: string
  name: string
  childCategory?: NestedCategoryData
  moves?: MoveData[]
}
