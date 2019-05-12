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
  const [editingDescription, setEditingDescription] = React.useState<
    string | null
  >(null)
  const [editingTransitionsIn, setEditingTransitionsIn] = React.useState(false)
  const [editingTransitionsOut, setEditingTransitionsOut] = React.useState(
    false
  )

  React.useEffect(() => {
    console.log('GET NEW DATA', match.params.id)
    window.setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      <Loading show={loading} />
      <s.Item
        editingDescription={editingDescription !== null}
        editingTitle={editingTitle !== null}
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
        {editingDescription !== null ? (
          <>
            <s.DescriptionInput
              autosize={true}
              onChange={(e) => setEditingDescription(e.target.value)}
              value={editingDescription + '\n'}
            />
            <s.DescriptionIconContainer editingDescription={true}>
              <Icon
                type="check-square"
                onClick={() => setEditingDescription(null)}
              />
              &nbsp;
              <Icon
                type="close-square"
                onClick={() => setEditingDescription(null)}
              />
            </s.DescriptionIconContainer>
          </>
        ) : (
          <>
            {description}
            <br />
            <br />
            <s.DescriptionIconContainer editingDescription={false}>
              <Icon
                type="edit"
                onClick={() => setEditingDescription(description)}
              />
            </s.DescriptionIconContainer>
          </>
        )}
      </s.Item>
      <s.Item size="small" title="Multimedia">
        There will be a list of multimedia here.
      </s.Item>
      <s.Item
        size="small"
        title={
          <s.TitleContainer>
            Transitions In
            {editingTransitionsIn ? (
              <div>
                <Icon
                  type="plus-square"
                  onClick={() => setEditingTransitionsIn(false)}
                />
                &nbsp;
                <Icon
                  type="close-square"
                  onClick={() => setEditingTransitionsIn(false)}
                />
              </div>
            ) : (
              <Icon type="edit" onClick={() => setEditingTransitionsIn(true)} />
            )}
          </s.TitleContainer>
        }
      >
        <MoveSummaryList
          parentId="transitionsIn"
          editing={editingTransitionsIn}
          moves={transitionsIn}
        />
      </s.Item>
      <s.Item
        size="small"
        title={
          <s.TitleContainer>
            Transitions Out
            {editingTransitionsOut ? (
              <div>
                <Icon
                  type="plus-square"
                  onClick={() => setEditingTransitionsOut(false)}
                />
                &nbsp;
                <Icon
                  type="close-square"
                  onClick={() => setEditingTransitionsOut(false)}
                />
              </div>
            ) : (
              <Icon
                type="edit"
                onClick={() => setEditingTransitionsOut(true)}
              />
            )}
          </s.TitleContainer>
        }
      >
        <MoveSummaryList
          parentId="transitionsOut"
          editing={editingTransitionsOut}
          moves={transitionsOut}
        />
      </s.Item>
      <s.Item size="small" title="Tags">
        <TagsContainer parentId={id} tags={tags} wrapline={true} />
      </s.Item>
    </>
  )
}

export default Move
