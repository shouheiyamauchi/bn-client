import React from 'react'

import * as s from './HorizontalList.styled'

const HorizontalList: React.FC = ({ children }) => (
  <s.Container>
    <s.SubContainer>{children}</s.SubContainer>
  </s.Container>
)

export default HorizontalList
