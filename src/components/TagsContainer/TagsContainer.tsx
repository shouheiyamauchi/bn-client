import React from 'react'

import * as s from './TagsContainer.styled'
import { TagsContainerProps } from './TagsContainer.typings'

const TagsContainer: React.FC<TagsContainerProps> = ({
  parentId,
  tags,
  wrapline
}) => (
  <s.Container wrapline={wrapline}>
    {tags.map((tag) => (
      <s.CustomTag
        key={`${parentId}-${tag.id}`}
        color={tag.color}
        wrapline={wrapline}
      >
        {tag.name}
      </s.CustomTag>
    ))}
  </s.Container>
)

export default TagsContainer
