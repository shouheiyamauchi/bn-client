import { TransitionType } from './Transition.config'

export interface TransitionProps {
  transitionType?: TransitionType
  onExited?: () => void
  show: boolean
  timeout?: number
}
