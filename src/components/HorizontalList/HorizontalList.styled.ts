import styled from 'styled-components'

import { Container as MoveSummaryContainer } from '../MoveSummary/MoveSummary.styled'

export const Container = styled.div`
  padding: 0 2px;
`

export const SubContainer = styled.div`
  display: flex;
  overflow-x: auto;

  ${MoveSummaryContainer} {
    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`
