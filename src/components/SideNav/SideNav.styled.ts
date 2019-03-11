import styled from 'styled-components'
import * as c from '~src/styles/colors'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${c.TRANSPARENT_BLACK};
`

export const Nav = styled.div`
  max-width: calc(100% - 100px);
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${c.WHITE};
  z-index: 1;
`
