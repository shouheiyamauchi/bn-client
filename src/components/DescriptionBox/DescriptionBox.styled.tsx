import { Card, Input } from 'antd'
import * as React from 'react'
import styled, { css } from 'styled-components'

export const Item = styled(({ editingDescription, editingTitle, ...props }) => (
  <Card {...props} />
))<{
  editingTitle?: boolean
}>`
  margin 4px 0;

  > .ant-card-head {
    > .ant-card-head-wrapper {
      > .ant-card-head-title {
        ${({ editingTitle }) =>
          editingTitle &&
          css`
            padding: 2.5px 0;
            margin-left: -7px;
          `}
      }
    }
  }

  &.ant-card-small {
    > .ant-card-head {
      padding: 0 5px 0 12px;
    }
    > .ant-card-body {
      ${({ editingDescription }) =>
        editingDescription &&
        css`
          padding: 8.5px 5px 7.5px 5px;
        `}
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleIconContainer = styled.div`
  margin-right: 7px;
  margin-left: 5px;
`

export const TitleInput = styled(Input)`
  padding-top: 2px;
  padding-left: 6px;
  padding-right: 6px;
`

export const DescriptionInput = styled(Input.TextArea)`
  padding-top: 2px;
  padding-left: 6px;
  padding-right: 6px;
`

export const DescriptionIconContainer = styled.div<{
  editingDescription: boolean
}>`
  text-align: right;
  ${({ editingDescription }) =>
    editingDescription
      ? css`
          margin-right: 7px;
        `
      : css`
          margin-top: 4px;
          margin-bottom: -4px;
        `}
`
