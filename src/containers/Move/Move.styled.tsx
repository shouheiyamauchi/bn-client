import { Card, Input } from 'antd'
import * as React from 'react'
import styled, { css } from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Item = styled(({ editing, ...props }) => <Card {...props} />)<{
  editing?: boolean
}>`
  margin 4px 0;

  > .ant-card-head {
    > .ant-card-head-wrapper {
      > .ant-card-head-title {
        ${({ editing }) =>
          editing &&
          css`
            padding: 2.5px 0;
            margin-left: -7px;
          `}
      }
    }
  }
`

export const TitleInput = styled(Input)`
  padding-top: 2px;
  padding-left: 6px;
  padding-right: 6px;
  margin-right: 8px;
`
