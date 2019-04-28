import * as React from 'react'

import * as s from './Header.styled'

const Header: React.FC = ({ children }) => {
  return (
    <>
      <s.Container>{children}</s.Container>
      <s.Padding />
    </>
  )
}

export default Header
