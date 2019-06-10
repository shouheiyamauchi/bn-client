import { MoveData } from '../../typings/move.typings'

export interface MoveSummaryListProps {
  editing?: boolean
  moves: MoveData[]
  parentId: string
}
