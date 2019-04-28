import styled from 'styled-components'
import * as c from '~src/styles/colors'
import * as z from '~src/styles/z-index'

export const Container = styled.div`
  height: 30px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background: ${c.WHITE};
  z-index: ${z.HEADER};
`

export const Padding = styled.div`
  height: 30px;
`
