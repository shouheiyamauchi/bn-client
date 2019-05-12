import update from 'immutability-helper'
import * as React from 'react'
import { CategoryData } from '~src/components/Category/Category.typings'

import { CategoriesContextState } from './Categories.typings'

const stateTemplate: CategoriesContextState = {
  collapsed: {},
  pages: {},
  setCollapsed: () => {
    /* */
  },
  setPage: () => {
    /* */
  }
}

export const CategoriesContext = React.createContext(stateTemplate)

export class CategoriesProvider extends React.Component<
  {},
  CategoriesContextState
> {
  public constructor(props: {}) {
    super(props)

    this.state = {
      collapsed: {},
      pages: {},
      setCollapsed: this.setCollapsed,
      setPage: this.setPage
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

  public setPage = (pageId: string, category: CategoryData) => {
    this.setState((prevState) =>
      update(prevState, {
        pages: {
          [pageId]: { $set: category }
        }
      })
    )
  }

  public render() {
    return (
      <CategoriesContext.Provider value={this.state}>
        {this.props.children}
      </CategoriesContext.Provider>
    )
  }
}
