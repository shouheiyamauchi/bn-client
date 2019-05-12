import { Icon } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import * as c from '~src/styles/colors'

import Stats from '../Stats/Stats'
import TagsContainer from '../TagsContainer/TagsContainer'

import * as s from './MoveSummary.styled'
import { MoveSummaryProps } from './MoveSummary.typings'

const MoveSummary: React.FC<MoveSummaryProps> = ({
  editing,
  id,
  name,
  description,
  parentId,
  tags
}) => (
  <s.Container
    title={
      <s.TitleContainer>
        {name}
        {editing ? (
          <Icon style={{ color: c.RED }} type="minus-circle" />
        ) : (
          <Link to={`/moves/${id}`}>
            <Icon type="right-circle" />
          </Link>
        )}
      </s.TitleContainer>
    }
    size="small"
    type="inner"
  >
    {description}
    <s.Line orientation="left">Stats</s.Line>
    <s.StatsContainer>
      <Stats
        backgroundColor="#494949"
        color="#ffffff"
        content="Media"
        count={tags.length}
      />
      <Stats
        backgroundColor="#545b5f"
        color="#fbeb70"
        content="Ins"
        count={tags.length}
      />
      <Stats
        backgroundColor="#fbeb70"
        color="#545b5f"
        content="Outs"
        count={tags.length}
      />
    </s.StatsContainer>
    <s.Line orientation="left">Tags</s.Line>
    <TagsContainer parentId={parentId} tags={tags} />
  </s.Container>
)

export default MoveSummary
