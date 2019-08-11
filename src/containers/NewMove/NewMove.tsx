import { Button, Divider } from 'antd'
import React from 'react'
import * as movesApi from '~src/api/moves'
import DescriptionBox from '~src/components/DescriptionBox/DescriptionBox'
import {
  TitleInput,
  TitleIconContainer,
  DescriptionInput
} from '~src/components/DescriptionBox/DescriptionBox.styled'
import IconGroup from '~src/components/IconGroup/IconGroup'
import Loading from '~src/components/Loading/Loading'
import TagsContainer from '~src/components/TagsContainer/TagsContainer'
import { Tag } from '~src/components/TagsContainer/TagsContainer.typings'
import CategoriesTags from '~src/containers/CategoriesTags/CategoriesTags'
import { AccountContext } from '~src/contexts/Account/Account'
import { CategoriesContext } from '~src/contexts/Categories/Categories'

const NewMove: React.FC = () => {
  const { logout } = React.useContext(AccountContext)
  const { loadTags, tags } = React.useContext(CategoriesContext)

  const [loading, setLoading] = React.useState(false)
  const [editingName, setEditingTitle] = React.useState('')
  const [editingDescription, setEditingDescription] = React.useState('')
  const [selectedTags, setSelectedTags] = React.useState<Tag[]>([])
  const [
    editingCategoriesTagsModal,
    setEditingCategoriesTagsModalVisible
  ] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)

    loadTags()
      .then(() => {
        setLoading(false)
      })
      .catch(({ response: { status } }) => {
        setLoading(false)
        if (status === 401) {
          logout()
        }
      })
  }, [])

  const onSelectTag = (id: string) => {
    const selectedTag = tags.find((tag) => tag.id === id)
    const alreadySelected = Boolean(selectedTags.find((tag) => tag.id === id))
    if (selectedTag) {
      alreadySelected
        ? removeTag(id)
        : setSelectedTags([...selectedTags, selectedTag])
    }
  }

  const removeTag = (tagId: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== tagId))
  }

  const createMove = async () => {
    const response = await movesApi.create({
      description: editingDescription,
      draft: true,
      multimedia: [],
      name: editingName,
      tags: selectedTags.map(({ id }) => id)
    })

    console.log(response.data.data._id)
  }

  return (
    <>
      <Loading show={loading} />
      <DescriptionBox
        editingName={editingName !== null}
        editingDescription={editingDescription !== null}
        title={
          <TitleInput
            placeholder="Title of move"
            value={editingName}
            onChange={(e) => setEditingTitle(e.target.value)}
          />
        }
        type="inner"
      >
        <DescriptionInput
          placeholder="Description of move"
          autosize={true}
          onChange={(e) => setEditingDescription(e.target.value)}
          value={editingDescription}
        />
      </DescriptionBox>
      <DescriptionBox title="Multimedia">
        There will be a list of multimedia here.
      </DescriptionBox>
      <DescriptionBox
        title={
          <>
            Tags
            <TitleIconContainer>
              <IconGroup
                icons={
                  editingCategoriesTagsModal
                    ? [
                        {
                          onClick: () =>
                            setEditingCategoriesTagsModalVisible(false),
                          type: 'close-square'
                        }
                      ]
                    : [
                        {
                          onClick: () =>
                            setEditingCategoriesTagsModalVisible(true),
                          type: 'plus-square'
                        }
                      ]
                }
              />
            </TitleIconContainer>
          </>
        }
      >
        <CategoriesTags
          editing={editingCategoriesTagsModal}
          onClickTag={onSelectTag}
          selectedTags={selectedTags}
        />
        <Divider />
        <TagsContainer
          onClose={removeTag}
          parentId={'newMove'}
          tags={selectedTags}
          wrapline={true}
        />
      </DescriptionBox>
      <Button block={true} onClick={createMove}>
        Create Move
      </Button>
    </>
  )
}

export default NewMove
