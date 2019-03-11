import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

import { TransitionType, TRANSITION_TIMEOUT } from './Transition.config'
import { TransitionProps } from './Transition.typings'

const withTransition = <P extends object>(
  Component: React.ComponentType<P>
): React.SFC<P & TransitionProps> => ({
  transitionType = TransitionType.Fade,
  onExited,
  show,
  timeout = TRANSITION_TIMEOUT,
  ...props
}: TransitionProps) => (
  <CSSTransition
    classNames={`transition-${transitionType}`}
    in={show}
    onExited={onExited}
    timeout={timeout}
    unmountOnExit={true}
  >
    <Component {...props as P} />
  </CSSTransition>
)

export default withTransition
