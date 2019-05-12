import { MoveData } from '../MoveSummary/MoveSummary.typings'

export interface CategoryProps extends CategoryData {
  pageId: string
  parentId: string
}

export interface CategoryData {
  id: string
  name: string
  tags: CategoryTag[]
}

interface CategoryTag {
  id: string
  name: string
  childrenCategory: CategoryData[]
  moves: MoveData[]
}
