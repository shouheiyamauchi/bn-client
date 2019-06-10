import { Icon } from 'antd'
import * as React from 'react'
import { CategoriesContext } from '~src/contexts/Categories/Categories'
import * as c from '~src/styles/colors'

import { NestedCategoryData } from '../NestedCategory/NestedCategory.typings'

import * as s from './AnchorLinks.styled'
import { AnchorLinksProps } from './AnchorLinks.typings'

const AnchorLinks: React.FC<AnchorLinksProps> = ({ pageId }) => {
  const { collapsed, pages, setCollapsed } = React.useContext(CategoriesContext)
  const [showAnchor, setShowAnchor] = React.useState(false)

  const toggleHidden = (tagId: string) => {
    setCollapsed(pageId, tagId, !collapsed[pageId] || !collapsed[pageId][tagId])
  }

  const generateLinks = (
    category: NestedCategoryData,
    parentId: string,
    level: number = -1
  ): JSX.Element[] =>
    category.tags.map((tag) => {
      const uniqueTagId = `${parentId}-${tag.id}`
      return (
        <React.Fragment key={`anchor-${uniqueTagId}`}>
          <s.Link
            href={`#${uniqueTagId}`}
            level={level}
            title={
              <>
                <Icon
                  onClick={() => toggleHidden(uniqueTagId)}
                  style={{ fontSize: '10px' }}
                  type={
                    collapsed[pageId] && collapsed[pageId][uniqueTagId]
                      ? 'plus-square'
                      : 'minus-square'
                  }
                />{' '}
                {tag.name}
              </>
            }
          />
          {(!collapsed[pageId] || !collapsed[pageId][uniqueTagId]) &&
            tag.childCategory &&
            generateLinks(tag.childCategory, uniqueTagId, level + 1)}
        </React.Fragment>
      )
    })

  return (
    <s.Container showAnchor={showAnchor}>
      <s.IconContainer>
        <Icon
          onClick={() => setShowAnchor(!showAnchor)}
          style={{
            background: c.WHITE,
            border: `solid 1px ${c.BLACK}`,
            borderRadius: '2px 0 0 2px',
            opacity: 0.95,
            padding: '2px'
          }}
          type={showAnchor ? 'menu-unfold' : 'menu-fold'}
        />
      </s.IconContainer>
      <s.StyledAnchor
        onClick={(e) => e.preventDefault()}
        showAnchor={showAnchor}
      >
        {generateLinks(pages[pageId], pageId)}
      </s.StyledAnchor>
    </s.Container>
  )
}

export default AnchorLinks
