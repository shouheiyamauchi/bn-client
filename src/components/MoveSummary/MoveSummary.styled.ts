import { Card } from 'antd'
import styled from 'styled-components'

export const Container = styled(Card)`
  margin 5px;

  > .ant-card-head {
    width: 150px;
  }

  > .ant-card-body {
    width: 150px;
    height: 80px;
    overflow: auto;
    padding: 6px;
  }
`
