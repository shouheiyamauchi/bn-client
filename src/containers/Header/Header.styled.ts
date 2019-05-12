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
  border-bottom: 1px solid ${c.SEASHELL};
`

export const Padding = styled.div`
  height: 30px;
`

export const HeaderTextContainer = styled.div`
  cursor: pointer;
  margin-left: 4px;
`

export const HeaderText = styled.span`
  font-weight: bold;
`
