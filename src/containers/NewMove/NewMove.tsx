import { Divider, TreeSelect } from 'antd'
import React from 'react'
import * as categoriesApi from '~src/api/categories'
import * as tagsApi from '~src/api/tags'
import DescriptionBox from '~src/components/DescriptionBox/DescriptionBox'
import {
  TitleInput,
  TitleIconContainer,
  DescriptionInput,
  DescriptionIconContainer
} from '~src/components/DescriptionBox/DescriptionBox.styled'
import IconGroup from '~src/components/IconGroup/IconGroup'
import Loading from '~src/components/Loading/Loading'
// import MoveSummaryList from '~src/components/MoveSummaryList/MoveSummaryList'
import TagsContainer from '~src/components/TagsContainer/TagsContainer'
import { Tag } from '~src/components/TagsContainer/TagsContainer.typings'
import { AccountContext } from '~src/contexts/Account/Account'
import { CategoriesContext } from '~src/contexts/Categories/Categories'

const NewMove: React.FC = () => {
  const { logout } = React.useContext(AccountContext)
  const { categories, setCategories, setTags, tags } = React.useContext(
    CategoriesContext
  )

  const [loading, setLoading] = React.useState(true)
  const [editingTitle, setEditingTitle] = React.useState('')
  const [editingDescription, setEditingDescription] = React.useState('')
  const [selectedTags, setSelectedTags] = React.useState<Tag[]>([])

  React.useEffect(() => {
    Promise.all([
      categoriesApi.list().then(({ data: { data } }) => {
        const categoriesData = data.map((category) => ({
          id: category._id,
          name: category.name,
          tags: category.tags.map((tag) => ({
            color: category.color,
            id: tag._id,
            name: tag.name
          }))
        }))

        setCategories(categoriesData)
      }),
      tagsApi.list().then(({ data: { data } }) => {
        const tagsData = data.map((tag) => ({
          color: tag.category.color,
          id: tag._id,
          name: tag.name
        }))

        setTags(tagsData)
      })
    ])
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

  const onSelectTag = (value: string) => {
    const [type, itemId] = value.split('-')
    if (type === 'tag') {
      setSelectedTags([...selectedTags, tags.find((tag) => tag.id === itemId)!])
    }
  }

  const removeTag = (tagId: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== tagId))
  }

  const treeData = [
    {
      key: 'newCategory',
      title: 'Create new category',
      value: 'newCategory'
    },
    ...categories.map((category) => ({
      children: [
        {
          key: `newTag-${category.id}`,
          title: 'Create new tag',
          value: `newTag-${category.id}`
        },
        ...category.tags.map((tag) => ({
          disabled: Boolean(
            selectedTags.find((selectedTag) => selectedTag.id === tag.id)
          ),
          key: tag.id,
          title: tag.name,
          value: `tag-${tag.id}`
        }))
      ],
      key: category.id,
      title: category.name,
      value: `category-${category.id}`
    }))
  ]

  return (
    <>
      <Loading show={loading} />
      <DescriptionBox
        editingTitle={editingTitle !== null}
        editingDescription={editingDescription !== null}
        title={
          <TitleInput
            placeholder="Title of move"
            value={editingTitle}
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
                icons={[
                  {
                    onClick: () => alert('Add tag'),
                    type: 'plus-square'
                  }
                ]}
              />
            </TitleIconContainer>
          </>
        }
      >
        <TreeSelect
          showSearch={true}
          style={{ width: '100%' }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Select tag to add"
          treeDefaultExpandAll={true}
          onSelect={onSelectTag}
          value={undefined}
          treeData={treeData}
        />
        <Divider />
        <TagsContainer
          onClose={removeTag}
          parentId={'newMove'}
          tags={selectedTags}
          wrapline={true}
        />
      </DescriptionBox>
    </>
  )
}

export default NewMove
