import { css } from 'styled-components'
import { EASE_OUT } from '~src/styles/animations'

export const transitionStyled = css`
  .transition-fade-enter {
    opacity: 0;
  }
  .transition-fade-enter-active {
    opacity: 1;
    transition: opacity ${EASE_OUT};
  }
  .transition-fade-appear {
    opacity: 0;
  }
  .transition-fade-appear-active {
    opacity: 1;
    transition: opacity ${EASE_OUT};
  }
  .transition-fade-exit {
    opacity: 1;
  }
  .transition-fade-exit-active {
    opacity: 0;
    transition: opacity ${EASE_OUT};
  }

  .transition-slide-in-left-enter {
    transform: translate3d(-100%, 0, 0);
  }
  .transition-slide-in-left-enter-active {
    transform: translate3d(0, 0, 0);
    transition: transform ${EASE_OUT};
  }
  .transition-slide-in-left-exit {
    transform: translate3d(0, 0, 0);
  }
  .transition-slide-in-left-exit-active {
    transform: translate3d(-100%, 0, 0);
    transition: transform ${EASE_OUT};
  }

  .transition-slide-in-right-enter {
    transform: translate3d(100%, 0, 0);
  }
  .transition-slide-in-right-enter-active {
    transform: translate3d(0, 0, 0);
    transition: transform ${EASE_OUT};
  }
  .transition-slide-in-right-exit {
    transform: translate3d(0, 0, 0);
  }
  .transition-slide-in-right-exit-active {
    transform: translate3d(100%, 0, 0);
    transition: transform ${EASE_OUT};
  }
`
