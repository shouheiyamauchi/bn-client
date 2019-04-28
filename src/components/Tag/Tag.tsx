import React from 'react'

import * as s from './Tag.styled'
import { TagProps } from './Tag.typings'

const Tag: React.FC<TagProps> = ({ color, name }) => (
  <s.Container color={color}>{name}</s.Container>
)

export default Tag
