import { NestedCategoryData } from '~src/components/NestedCategory/NestedCategory.typings'
import { Tag } from '~src/components/TagsContainer/TagsContainer.typings'

export interface CategoriesContextState {
  categories: Category[]
  collapsed: { [pageId: string]: { [collapsed: string]: boolean } }
  pages: { [pageId: string]: NestedCategoryData }
  setCategories: (categories: Category[]) => void
  setCollapsed: (pageId: string, tagId: string, collapsed: boolean) => void
  setPage: (pageId: string, category: NestedCategoryData) => void
  setTags: (tags: Tag[]) => void
  tags: Tag[]
}

export interface Category {
  id: string
  name: string
  tags: Tag[]
}
