import React from 'react'

import * as s from './TagsContainer.styled'
import { TagsContainerProps } from './TagsContainer.typings'

const TagsContainer: React.FC<TagsContainerProps> = ({
  parentId,
  tags,
  wrapline,
  onClose
}) => {
  const onCloseWithId = (tagId: string) => (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault()

    if (onClose) {
      onClose(tagId)
    }
  }

  return (
    <s.Container wrapline={wrapline}>
      {tags.map((tag) => (
        <s.CustomTag
          key={`${parentId}-${tag.id}`}
          color={tag.color}
          wrapline={wrapline}
          closable={Boolean(onClose)}
          onClose={onCloseWithId(tag.id)}
        >
          {tag.name}
        </s.CustomTag>
      ))}
    </s.Container>
  )
}

export default TagsContainer
