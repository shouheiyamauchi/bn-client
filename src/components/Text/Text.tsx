import React from 'react'

import * as s from './Text.styled'
import { TextProps } from './Text.typings'

const Text: React.FC<TextProps> = ({ children, textSize }) => (
  <s.Container textSize={textSize}>{children}</s.Container>
)

export default Text
