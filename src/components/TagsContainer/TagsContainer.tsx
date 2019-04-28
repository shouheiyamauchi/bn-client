import React from 'react'

import Tag from '../Tag/Tag'

import * as s from './TagsContainer.styled'
import { TagsContainerProps } from './TagsContainer.typings'

const TagsContainer: React.FC<TagsContainerProps> = ({ tags }) => (
  <s.Container>
    {tags.map((tag) => (
      <Tag key={tag.id} {...tag} />
    ))}
  </s.Container>
)

export default TagsContainer
