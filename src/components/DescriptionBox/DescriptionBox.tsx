import React from 'react'

import * as s from './DescriptionBox.styled'
import { DescriptionBoxProps } from './DescriptionBox.typings'

const DescriptionBox: React.FC<DescriptionBoxProps> = ({
  children,
  editingName,
  editingDescription,
  title,
  type
}) => {
  return (
    <s.Item
      editingName={editingName}
      editingDescription={editingDescription}
      size="small"
      title={<s.TitleContainer>{title}</s.TitleContainer>}
      type={type}
    >
      {children}
    </s.Item>
  )
}

export default DescriptionBox
