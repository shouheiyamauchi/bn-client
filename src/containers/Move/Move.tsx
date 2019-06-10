import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import DescriptionBox from '~src/components/DescriptionBox/DescriptionBox'
import {
  TitleInput,
  TitleIconContainer,
  DescriptionInput,
  DescriptionIconContainer
} from '~src/components/DescriptionBox/DescriptionBox.styled'
import IconGroup from '~src/components/IconGroup/IconGroup'
import Loading from '~src/components/Loading/Loading'
import MoveSummaryList from '~src/components/MoveSummaryList/MoveSummaryList'
import TagsContainer from '~src/components/TagsContainer/TagsContainer'
import { move } from '~src/dummy'

const Move: React.FC<RouteComponentProps<{ moveId: string }>> = ({
  match: {
    params: { moveId }
  }
}) => {
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
    console.log('GET NEW DATA', moveId)
    window.setTimeout(() => setLoading(false), 2000)
  }, [moveId])

  return (
    <>
      <Loading show={loading} />
      <DescriptionBox
        editingTitle={editingTitle !== null}
        editingDescription={editingDescription !== null}
        title={
          editingTitle !== null ? (
            <>
              <TitleInput
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />
              <TitleIconContainer>
                <IconGroup
                  icons={[
                    {
                      onClick: () => setEditingTitle(null),
                      type: 'check-square'
                    },
                    {
                      onClick: () => setEditingTitle(null),
                      type: 'close-square'
                    }
                  ]}
                />
              </TitleIconContainer>
            </>
          ) : (
            <>
              {name}
              <TitleIconContainer>
                <IconGroup
                  icons={[
                    {
                      onClick: () => setEditingTitle(name),
                      type: 'edit'
                    }
                  ]}
                />
              </TitleIconContainer>
            </>
          )
        }
        type="inner"
      >
        {editingDescription !== null ? (
          <>
            <DescriptionInput
              autosize={true}
              onChange={(e) => setEditingDescription(e.target.value)}
              value={editingDescription + '\n'}
            />
            <DescriptionIconContainer editingDescription={true}>
              <IconGroup
                icons={[
                  {
                    onClick: () => setEditingDescription(null),
                    type: 'check-square'
                  },
                  {
                    onClick: () => setEditingDescription(null),
                    type: 'close-square'
                  }
                ]}
              />
            </DescriptionIconContainer>
          </>
        ) : (
          <>
            {description}
            <br />
            <br />
            <DescriptionIconContainer editingDescription={false}>
              <IconGroup
                icons={[
                  {
                    onClick: () => setEditingDescription(description),
                    type: 'edit'
                  }
                ]}
              />
            </DescriptionIconContainer>
          </>
        )}
      </DescriptionBox>
      <DescriptionBox title="Multimedia">
        There will be a list of multimedia here.
      </DescriptionBox>
      <DescriptionBox
        title={
          <>
            Transitions In
            {editingTransitionsIn ? (
              <TitleIconContainer>
                <IconGroup
                  icons={[
                    {
                      onClick: () => setEditingTransitionsIn(false),
                      type: 'plus-square'
                    },
                    {
                      onClick: () => setEditingTransitionsIn(false),
                      type: 'close-square'
                    }
                  ]}
                />
              </TitleIconContainer>
            ) : (
              <TitleIconContainer>
                <IconGroup
                  icons={[
                    {
                      onClick: () => setEditingTransitionsIn(true),
                      type: 'edit'
                    }
                  ]}
                />
              </TitleIconContainer>
            )}
          </>
        }
      >
        <MoveSummaryList
          parentId="transitionsIn"
          editing={editingTransitionsIn}
          moves={transitionsIn}
        />
      </DescriptionBox>
      <DescriptionBox
        title={
          <>
            Transitions Out
            {editingTransitionsOut ? (
              <TitleIconContainer>
                <IconGroup
                  icons={[
                    {
                      onClick: () => setEditingTransitionsOut(false),
                      type: 'plus-square'
                    },
                    {
                      onClick: () => setEditingTransitionsOut(false),
                      type: 'close-square'
                    }
                  ]}
                />
              </TitleIconContainer>
            ) : (
              <TitleIconContainer>
                <IconGroup
                  icons={[
                    {
                      onClick: () => setEditingTransitionsOut(true),
                      type: 'edit'
                    }
                  ]}
                />
              </TitleIconContainer>
            )}
          </>
        }
      >
        <MoveSummaryList
          parentId="transitionsOut"
          editing={editingTransitionsOut}
          moves={transitionsOut}
        />
      </DescriptionBox>
      <DescriptionBox title="Tags">
        <TagsContainer parentId={id} tags={tags} wrapline={true} />
      </DescriptionBox>
    </>
  )
}

export default Move
