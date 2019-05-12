import { Tag } from 'antd'
import * as React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div<{ wrapline?: boolean }>`
  display: flex;
  overflow-y: auto;
  ${({ wrapline }) =>
    wrapline &&
    css`
      flex-wrap: wrap;
      margin-bottom: -5px;
    `}
`

export const CustomTag = styled(({ wrapline, ...props }) => (
  <Tag {...props} />
))<{ wrapline?: boolean }>`
  margin-right: 5px;
  ${({ wrapline }) =>
    wrapline &&
    css`
      margin-bottom: 5px;
    `}

  &:last-child {
    margin-right: 0;
  }
`
