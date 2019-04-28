import React from 'react'
import AnimateHeight from 'react-animate-height'
import HorizontalList from '~src/components/HorizontalList/HorizontalList'
import MoveSummary from '~src/components/MoveSummary/MoveSummary'

import * as s from './Category.styled'
import { CategoryProps } from './Category.typings'

const Category: React.FC<CategoryProps> = ({ id, name, tags }) => {
  const [collapsed, setCollapsed] = React.useState<{ [key: string]: boolean }>(
    {}
  )

  const toggleHidden = (tagId: string) => () => {
    setCollapsed({
      ...collapsed,
      [tagId]: !collapsed[tagId]
    })
  }

  return (
    <>
      {tags.map((tag) => (
        <s.Container>
          <span onClick={toggleHidden(tag.id)}>{`${name} - ${tag.name}`}</span>
          <AnimateHeight duration={300} height={collapsed[tag.id] ? 0 : 'auto'}>
            {tag.childrenCategory.length ? (
              tag.childrenCategory.map((childCategory) => (
                <Category
                  key={id + tag.id + childCategory.id}
                  {...childCategory}
                />
              ))
            ) : (
              <HorizontalList>
                {tag.moves.map((move) => (
                  <MoveSummary key={move.id} {...move} />
                ))}
              </HorizontalList>
            )}
          </AnimateHeight>
        </s.Container>
      ))}
    </>
  )
}

export default Category
