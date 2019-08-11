import { Icon, Tree } from 'antd'
import * as React from 'react'
import { CompactPicker } from 'react-color'
import * as categoriesApi from '~src/api/categories'
import * as tagsApi from '~src/api/tags'
import IconGroup from '~src/components/IconGroup/IconGroup'
import { Tag } from '~src/components/TagsContainer/TagsContainer.typings'
import { CategoriesContext } from '~src/contexts/Categories/Categories'

import * as s from './CategoriesTags.styled'

const { TreeNode } = Tree

const CategoriesTags: React.FC<{
  editing: boolean
  onClickTag: (id: string) => void
  selectedTags: Tag[]
}> = ({ editing, onClickTag, selectedTags }) => {
  const { categories, loadCategories, loadTags, tags } = React.useContext(
    CategoriesContext
  )

  const [selectedItem, setSelectedItem] = React.useState('')
  const [editingCategory, setEditingCategory] = React.useState({
    color: '',
    name: ''
  })
  const [editingTag, setEditingTag] = React.useState({ name: '' })
  const [categoryColor, setCategoryColor] = React.useState('')
  const [colorModalVisible, setColorModalVisible] = React.useState(false)

  const NEW_CATEGORY_STATE = { color: '#ffffff', name: '' }
  const NEW_TAG_STATE = { name: '' }

  const createCategory = async () => {
    const { color, name } = editingCategory

    await categoriesApi.create({
      color,
      name
    })
    await loadCategories()

    setSelectedItem('')
  }

  const updateCategory = async (id: string) => {
    const { color, name } = editingCategory

    await categoriesApi.update({
      color,
      id,
      name
    })
    await loadCategories()

    setSelectedItem('')
  }

  const createTag = async (category: string) => {
    const { name } = editingTag

    await tagsApi.create({
      category,
      name
    })
    await Promise.all([loadCategories(), loadTags()])

    setSelectedItem('')
  }

  const updateTag = async (id: string, category: string) => {
    const { name } = editingTag

    await tagsApi.update({
      category,
      id,
      name
    })
    await Promise.all([loadCategories(), loadTags()])

    setSelectedItem('')
  }

  React.useEffect(() => {
    loadCategories()
  }, [])

  React.useEffect(() => {
    setSelectedItem('')
  }, [editing])

  const onSelect = (e: string[]) => {
    const clickedItem = e[0]
    if (!clickedItem) {
      return
    }

    const [type, id] = clickedItem.split('-')

    if (!editing) {
      switch (type) {
        case 'tag':
          onClickTag(id)
          break
      }
    } else if (clickedItem !== selectedItem) {
      setSelectedItem(clickedItem)

      switch (type) {
        case 'newCategory':
          setCategoryColor(NEW_CATEGORY_STATE.color)
          setEditingCategory(NEW_CATEGORY_STATE)
          break
        case 'category':
          const selectedCategory = categories.find(
            (category) => category.id === id
          )
          if (selectedCategory) {
            setCategoryColor(selectedCategory.color)
            setEditingCategory(selectedCategory)
          }
          break
        case 'newTag':
          setEditingTag(NEW_TAG_STATE)
          break
        case 'tag':
          const selectedTag = tags.find((tag) => tag.id === id)
          if (selectedTag) {
            setEditingTag(selectedTag)
          }
          break
      }
    }
  }

  const onClickColor = (e: React.MouseEvent) => {
    e.stopPropagation()
    setColorModalVisible(true)
  }

  return (
    <>
      <s.ColorModal
        title="Category Color"
        visible={colorModalVisible}
        onOk={() => {
          setEditingCategory({ ...editingCategory, color: categoryColor })
          setColorModalVisible(false)
        }}
        onCancel={() => {
          setColorModalVisible(false)
        }}
      >
        <CompactPicker
          color={categoryColor || undefined}
          onChangeComplete={(color) => {
            setCategoryColor(color.hex)
          }}
        />
      </s.ColorModal>
      <Tree
        showIcon={true}
        defaultExpandAll={true}
        defaultExpandParent={true}
        switcherIcon={<Icon type="down" />}
        onSelect={onSelect}
      >
        {editing ? (
          <TreeNode
            key={'newCategory'}
            title={
              selectedItem === 'newCategory' ? (
                <>
                  <s.ColorBox
                    color={editingCategory.color}
                    onClick={onClickColor}
                  />
                  <s.NameInput
                    autoFocus={true}
                    value={editingCategory.name}
                    onChange={(e) =>
                      setEditingCategory({
                        ...editingCategory,
                        name: e.target.value
                      })
                    }
                  />
                  <IconGroup
                    icons={[
                      {
                        onClick: () => createCategory(),
                        type: 'plus-square'
                      },
                      {
                        onClick: () => setSelectedItem(''),
                        type: 'close-square'
                      }
                    ]}
                  />
                </>
              ) : (
                <>
                  <s.ColorBox color={NEW_CATEGORY_STATE.color} />
                  <s.NameText>New Category</s.NameText>
                </>
              )
            }
          />
        ) : (
          <></>
        )}
        {categories.map((category) => (
          <TreeNode
            key={`category-${category.id}`}
            title={
              selectedItem === `category-${category.id}` ? (
                <>
                  <s.ColorBox
                    color={editingCategory.color}
                    onClick={onClickColor}
                  />
                  <s.NameInput
                    autoFocus={true}
                    value={editingCategory.name}
                    onChange={(e) =>
                      setEditingCategory({
                        ...editingCategory,
                        name: e.target.value
                      })
                    }
                  />
                  <IconGroup
                    icons={[
                      {
                        onClick: () => updateCategory(category.id),
                        type: 'check-square'
                      },
                      {
                        onClick: () => setSelectedItem(''),
                        type: 'close-square'
                      }
                    ]}
                  />
                </>
              ) : (
                <>
                  <s.ColorBox color={category.color} />
                  <s.NameText>{category.name}</s.NameText>
                </>
              )
            }
          >
            {editing ? (
              <TreeNode
                key={`newTag-${category.id}`}
                title={
                  selectedItem === `newTag-${category.id}` ? (
                    <>
                      <s.NameInput
                        autoFocus={true}
                        value={editingTag.name}
                        onChange={(e) =>
                          setEditingTag({ ...editingTag, name: e.target.value })
                        }
                      />
                      <IconGroup
                        icons={[
                          {
                            onClick: () => createTag(category.id),
                            type: 'plus-square'
                          },
                          {
                            onClick: () => setSelectedItem(''),
                            type: 'close-square'
                          }
                        ]}
                      />
                    </>
                  ) : (
                    'New Tag'
                  )
                }
              />
            ) : (
              <></>
            )}
            {category.tags.map((tag) => (
              <TreeNode
                key={`tag-${tag.id}`}
                title={
                  selectedItem === `tag-${tag.id}` ? (
                    <>
                      <s.NameInput
                        autoFocus={true}
                        value={editingTag.name}
                        onChange={(e) =>
                          setEditingTag({ ...editingTag, name: e.target.value })
                        }
                      />
                      <IconGroup
                        icons={[
                          {
                            onClick: () => updateTag(tag.id, category.id),
                            type: 'check-square'
                          },
                          {
                            onClick: () => setSelectedItem(''),
                            type: 'close-square'
                          }
                        ]}
                      />
                    </>
                  ) : (
                    <>
                      <s.NameText>{tag.name}</s.NameText>
                      {selectedTags.map(({ id }) => id).includes(tag.id) && (
                        <Icon type="check" />
                      )}
                    </>
                  )
                }
              />
            ))}
          </TreeNode>
        ))}
      </Tree>
    </>
  )
}

export default CategoriesTags
