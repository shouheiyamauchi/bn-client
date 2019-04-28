import { createGlobalStyle } from 'styled-components'
import RobotoLight from '~src/assets/fonts/Roboto-Light.ttf'
import { transitionStyled } from '~src/hoc/Transition/Transition.styled'

import * as c from './colors'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Light';
    src: url(${RobotoLight});
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto-Light, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${c.SEASHELL};
  }

  ${transitionStyled};
`
