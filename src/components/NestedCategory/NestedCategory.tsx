import React from 'react'
import AnimateHeight from 'react-animate-height'
import MoveSummaryList from '~src/components/MoveSummaryList/MoveSummaryList'
import { CategoriesContext } from '~src/contexts/Categories/Categories'

import * as s from './NestedCategory.styled'
import { NestedCategoryProps } from './NestedCategory.typings'

const NestedCategory: React.FC<NestedCategoryProps> = ({
  name,
  pageId,
  parentId,
  tags
}) => {
  const { collapsed, setCollapsed } = React.useContext(CategoriesContext)

  const toggleHidden = (tagId: string) => {
    setCollapsed(pageId, tagId, !collapsed[pageId] || !collapsed[pageId][tagId])
  }

  return (
    <>
      {tags.map((tag) => {
        const uniqueTagId = `${parentId}-${tag.id}`

        return (
          <s.Container key={uniqueTagId} id={uniqueTagId}>
            <span onClick={() => toggleHidden(uniqueTagId)}>{`${name}-${
              tag.name
            }`}</span>
            <AnimateHeight
              duration={300}
              height={
                collapsed[pageId] && collapsed[pageId][uniqueTagId] ? 0 : 'auto'
              }
            >
              {tag.childCategory && (
                <NestedCategory
                  key={`${parentId}-${tag.id}-${tag.childCategory.id}`}
                  pageId={pageId}
                  parentId={`${parentId}-${tag.id}`}
                  {...tag.childCategory}
                />
              )}
              {tag.moves && (
                <MoveSummaryList
                  parentId={`${parentId}-${tag.id}`}
                  moves={tag.moves}
                />
              )}
            </AnimateHeight>
          </s.Container>
        )
      })}
    </>
  )
}

export default NestedCategory
