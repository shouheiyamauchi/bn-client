import { Menu } from 'antd'
import styled from 'styled-components'
import * as c from '~src/styles/colors'
import * as z from '~src/styles/z-index'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${c.TRANSPARENT_BLACK};
  z-index: ${z.NAV_OVERLAY};
`

export const Nav = styled(Menu)`
  max-width: calc(100% - 100px);
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${c.WHITE};
  overflow: auto;
  z-index: ${z.NAV};
`
