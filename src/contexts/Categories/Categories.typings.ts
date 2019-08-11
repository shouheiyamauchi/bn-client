import { NestedCategoryData } from '~src/components/NestedCategory/NestedCategory.typings'
import { Tag } from '~src/components/TagsContainer/TagsContainer.typings'

export interface CategoriesContextState {
  categories: Category[]
  collapsed: { [pageId: string]: { [collapsed: string]: boolean } }
  loadCategories: () => Promise<Category[]>
  loadTags: () => Promise<Tag[]>
  pages: { [pageId: string]: NestedCategoryData }
  setCollapsed: (pageId: string, tagId: string, collapsed: boolean) => void
  setPage: (pageId: string, category: NestedCategoryData) => void
  tags: Tag[]
}

export interface Category {
  color: string
  id: string
  name: string
  tags: Tag[]
}
