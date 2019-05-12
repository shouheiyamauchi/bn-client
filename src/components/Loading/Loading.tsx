import { Spin } from 'antd'
import * as React from 'react'
import withTransition from '~src/hoc/Transition/Transition'

import * as s from './Loading.styled'

const Loading: React.FC = () => (
  <s.Container>
    <Spin tip="Loading..." />
  </s.Container>
)

export default withTransition(Loading)
