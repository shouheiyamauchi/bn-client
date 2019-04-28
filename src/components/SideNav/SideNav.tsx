import React from 'react'
import withTransition from '~src/hoc/Transition/Transition'
import { TransitionType } from '~src/hoc/Transition/Transition.config'

import * as s from './SideNav.styled'
import { AppProps } from './SideNav.typings'

const EnhancedNav = withTransition(s.Nav)
const EnhancedOverlay = withTransition(s.Overlay)

const SideNav: React.FC<AppProps> = ({ children, onClickOutside, show }) => {
  return (
    <>
      <EnhancedNav
        mode="inline"
        show={show}
        transitionType={TransitionType.SlideInLeft}
      >
        {children}
      </EnhancedNav>
      <EnhancedOverlay show={show} onClick={onClickOutside} />
    </>
  )
}

export default SideNav
