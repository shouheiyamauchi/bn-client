import { Card, Divider } from 'antd'
import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Container = styled(Card)`
  margin 5px;

  > .ant-card-head {
    width: 150px;
  }

  > .ant-card-body {
    width: 150px;
    padding: 6px;
  }
`

export const Line = styled(Divider)`
  &.ant-divider-horizontal.ant-divider-with-text-left {
    margin: 6px 0;

    > .ant-divider-inner-text {
      padding: 0 4px;
      font-size: 12px;
    }
  }
`

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
