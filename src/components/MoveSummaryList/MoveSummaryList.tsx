import React from 'react'

import MoveSummary from '../MoveSummary/MoveSummary'

import * as s from './MoveSummaryList.styled'
import { MoveSummaryListProps } from './MoveSummaryList.typings'

const MoveSummaryList: React.FC<MoveSummaryListProps> = ({
  editing,
  moves,
  parentId
}) => (
  <s.Container>
    <s.SubContainer>
      {moves.map((move) => (
        <MoveSummary
          key={`${parentId}-${move.id}`}
          editing={editing}
          parentId={`${parentId}-${move.id}`}
          {...move}
        />
      ))}
    </s.SubContainer>
  </s.Container>
)

export default React.memo(MoveSummaryList)
