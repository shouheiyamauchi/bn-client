import React from 'react'
import withTransition from '~src/hoc/Transition/Transition'
import { TransitionType } from '~src/hoc/Transition/Transition.config'

import * as s from './SideNav.styled'
import { AppProps } from './SideNav.typings'

const EnhancedNav = withTransition(s.Nav)
const EnhancedOverlay = withTransition(s.Overlay)

class SideNav extends React.Component<AppProps> {
  public render() {
    const { children, onClickOutside, show } = this.props

    return (
      <>
        <EnhancedNav show={show} transitionType={TransitionType.SlideInLeft}>
          {children}
        </EnhancedNav>
        <EnhancedOverlay show={show} onClick={onClickOutside} />
      </>
    )
  }
}

export default SideNav
