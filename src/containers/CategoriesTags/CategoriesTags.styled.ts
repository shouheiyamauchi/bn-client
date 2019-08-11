import { Input, Modal } from 'antd'
import styled from 'styled-components'

export const NameInput = styled(Input)`
  padding: 0;
  height: 17px;
  width: 100px;
  margin-right: 6px;
`

export const NameText = styled.span`
  margin-right: 6px;
`

export const ColorBox = styled.span<{ color?: string }>`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  margin-right: 5px;
  display: inline-block;
  border: solid 1px black;
`

export const ColorModal = styled(Modal)`
  width: 255px !important;

  .ant-modal-body {
    padding: 5px !important;

    > div > div {
      box-shadow: none !important;
    }
  }
`
