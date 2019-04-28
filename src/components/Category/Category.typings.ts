import { MoveSummaryProps } from '../MoveSummary/MoveSummary.typings'

export interface CategoryProps {
  id: string
  name: string
  tags: CategoryTag[]
}

interface CategoryTag {
  id: string
  name: string
  childrenCategory: CategoryProps[]
  moves: MoveSummaryProps[]
}
