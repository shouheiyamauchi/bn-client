import { MoveData } from '../MoveSummary/MoveSummary.typings'

export interface MoveSummaryListProps {
  editing?: boolean
  moves: MoveData[]
  parentId: string
}
