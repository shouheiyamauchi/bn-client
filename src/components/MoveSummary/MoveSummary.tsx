import React from 'react'

import TagsContainer from '../TagsContainer/TagsContainer'

import * as s from './MoveSummary.styled'
import { MoveSummaryProps } from './MoveSummary.typings'

const MoveSummary: React.FC<MoveSummaryProps> = ({
  name,
  description,
  tags
}) => (
  <s.Container title={name} size="small" type="inner">
    {description}
    <TagsContainer tags={tags} />
  </s.Container>
)

export default MoveSummary
