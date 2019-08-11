import update from 'immutability-helper'
import * as React from 'react'
import * as categoriesApi from '~src/api/categories'
import * as tagsApi from '~src/api/tags'
import { NestedCategoryData } from '~src/components/NestedCategory/NestedCategory.typings'
import { Tag } from '~src/components/TagsContainer/TagsContainer.typings'

import { CategoriesContextState, Category } from './Categories.typings'

const stateTemplate = {}

export const CategoriesContext = React.createContext(
  stateTemplate as CategoriesContextState
)

export class CategoriesProvider extends React.Component<
  {},
  CategoriesContextState
> {
  public constructor(props: {}) {
    super(props)

    this.state = {
      categories: [],
      collapsed: {},
      loadCategories: this.loadCategories,
      loadTags: this.loadTags,
      pages: {},
      setCollapsed: this.setCollapsed,
      setPage: this.setPage,
      tags: []
    }
  }

  public setCollapsed = (pageId: string, tagId: string, collapsed: boolean) => {
    this.setState((prevState) => {
      const pageIdValue = prevState.collapsed[pageId]
        ? { [tagId]: { $set: collapsed } }
        : { $set: { [tagId]: collapsed } }

      return update(prevState, {
        collapsed: {
          [pageId]: pageIdValue
        }
      })
    })
  }

  public setPage = (pageId: string, category: NestedCategoryData) => {
    this.setState((prevState) =>
      update(prevState, {
        pages: {
          [pageId]: { $set: category }
        }
      })
    )
  }

  public loadCategories = () =>
    new Promise<Category[]>((resolve, reject) => {
      categoriesApi
        .list()
        .then(({ data: { data } }) => {
          const categories = data.map((category) => ({
            color: category.color,
            id: category._id,
            name: category.name,
            tags: category.tags.map((tag) => ({
              color: category.color,
              id: tag._id,
              name: tag.name
            }))
          }))

          this.setState({ categories }, () => resolve(categories))
        })
        .catch((error) => reject(error))
    })

  public loadTags = () =>
    new Promise<Tag[]>((resolve, reject) => {
      tagsApi
        .list()
        .then(({ data: { data } }) => {
          const tags = data.map((tag) => ({
            color: tag.category.color,
            id: tag._id,
            name: tag.name
          }))

          this.setState({ tags }, () => resolve(tags))
        })
        .catch((error) => reject(error))
    })

  public render() {
    return (
      <CategoriesContext.Provider value={this.state}>
        {this.props.children}
      </CategoriesContext.Provider>
    )
  }
}
