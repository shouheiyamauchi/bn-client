import { Avatar, Badge } from 'antd'
import * as React from 'react'

import * as s from './Stats.styled'
import { StatsProps } from './Stats.typings'

const Stats: React.FC<StatsProps> = ({
  backgroundColor,
  color,
  content,
  count
}) => (
  <s.AvatarContainer>
    <Badge count={count} showZero={true}>
      <Avatar shape="square" style={{ color, backgroundColor }}>
        {content}
      </Avatar>
    </Badge>
  </s.AvatarContainer>
)

export default React.memo(Stats)
