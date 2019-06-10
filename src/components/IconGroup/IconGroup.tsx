import { Icon } from 'antd'
import React from 'react'

import { IconGroupProps } from './IconGroup.typings'

const IconGroup: React.FC<IconGroupProps> = ({ icons }) => {
  return (
    <>
      {icons.map((props, index) => (
        <React.Fragment key={index}>
          {index > 0 && <>&nbsp;</>}
          <Icon {...props} />
        </React.Fragment>
      ))}
    </>
  )
}

export default IconGroup
