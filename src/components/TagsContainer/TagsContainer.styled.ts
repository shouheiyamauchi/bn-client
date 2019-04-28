import styled from 'styled-components'

import { Container as TagContainer } from '../Tag/Tag.styled'

export const Container = styled.div`
  display: flex;

  ${TagContainer} {
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
`
