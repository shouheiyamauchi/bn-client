import { CategoryData } from '~src/components/Category/Category.typings'

export interface CategoriesContextState {
  collapsed: { [pageId: string]: { [collapsed: string]: boolean } }
  pages: { [pageId: string]: CategoryData }
  setCollapsed: (pageId: string, tagId: string, collapsed: boolean) => void
  setPage: (pageId: string, category: CategoryData) => void
}
