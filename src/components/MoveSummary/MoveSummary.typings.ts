import { MoveData } from '../../typings/move.typings'

export interface MoveSummaryProps extends MoveData {
  editing?: boolean
  parentId: string
}
