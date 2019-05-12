export interface TagsContainerProps {
  parentId: string
  tags: Tag[]
  wrapline?: boolean
}

export interface Tag {
  id: string
  color: string
  name: string
}
