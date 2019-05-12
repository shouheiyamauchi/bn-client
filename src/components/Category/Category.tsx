import React from 'react'
import AnimateHeight from 'react-animate-height'
import MoveSummaryList from '~src/components/MoveSummaryList/MoveSummaryList'
import { CategoriesContext } from '~src/contexts/Categories/Categories'

import * as s from './Category.styled'
import { CategoryProps } from './Category.typings'

const Category: React.FC<CategoryProps> = ({
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
              {tag.childrenCategory.length ? (
                tag.childrenCategory.map((childCategory) => (
                  <Category
                    key={`${parentId}-${tag.id}-${childCategory.id}`}
                    pageId={pageId}
                    parentId={`${parentId}-${tag.id}`}
                    {...childCategory}
                  />
                ))
              ) : (
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

export default Category
