import update from 'immutability-helper'
import * as React from 'react'
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
      pages: {},
      setCategories: this.setCategories,
      setCollapsed: this.setCollapsed,
      setPage: this.setPage,
      setTags: this.setTags,
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

  public setCategories = (categories: Category[]) => {
    this.setState({ categories })
  }

  public setTags = (tags: Tag[]) => {
    this.setState({ tags })
  }

  public render() {
    return (
      <CategoriesContext.Provider value={this.state}>
        {this.props.children}
      </CategoriesContext.Provider>
    )
  }
}
