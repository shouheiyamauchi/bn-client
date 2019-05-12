import { Icon } from 'antd'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Loading from '~src/components/Loading/Loading'
import MoveSummaryList from '~src/components/MoveSummaryList/MoveSummaryList'
import TagsContainer from '~src/components/TagsContainer/TagsContainer'
import { move } from '~src/dummy'

import * as s from './Move.styled'

const Move: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { id, name, description, tags, transitionsIn, transitionsOut } = move

  const [loading, setLoading] = React.useState(true)
  const [editingTitle, setEditingTitle] = React.useState<string | null>(null)

  React.useEffect(() => {
    console.log('GET NEW DATA', match.params.id)
    window.setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      <Loading show={loading} />
      <s.Item
        editing={editingTitle !== null}
        size="small"
        title={
          editingTitle !== null ? (
            <s.TitleContainer>
              <s.TitleInput
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />
              <Icon type="check-square" onClick={() => setEditingTitle(null)} />
              &nbsp;
              <Icon type="close-square" onClick={() => setEditingTitle(null)} />
            </s.TitleContainer>
          ) : (
            <s.TitleContainer>
              {name}
              <Icon type="edit" onClick={() => setEditingTitle(name)} />
            </s.TitleContainer>
          )
        }
        type="inner"
      >
        {description}
      </s.Item>
      <s.Item size="small" title="Transitions In">
        <MoveSummaryList parentId="transitionsIn" moves={transitionsIn} />
      </s.Item>
      <s.Item size="small" title="Transitions Out">
        <MoveSummaryList parentId="transitionsOut" moves={transitionsOut} />
      </s.Item>
      <s.Item size="small" title="Multimedia">
        This is some description for this move. This doesn't need to be too long
      </s.Item>
      <s.Item size="small" title="Tags">
        <TagsContainer parentId={id} tags={tags} wrapline={true} />
      </s.Item>
    </>
  )
}

export default Move
