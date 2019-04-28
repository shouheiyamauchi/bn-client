import styled from 'styled-components'

import { fontStyle, size } from './Text.config'

export const Container = styled.span<{ textSize?: size }>`
  display: block;
  font-size: ${({ textSize }) => fontStyle(textSize).size};
  line-height: ${({ textSize }) => fontStyle(textSize).lineHeight};
`
