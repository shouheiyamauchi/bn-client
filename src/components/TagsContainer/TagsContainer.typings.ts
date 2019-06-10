export interface TagsContainerProps {
  parentId: string
  tags: Tag[]
  wrapline?: boolean
  onClose?: (tagId: string) => void
}

export interface Tag {
  id: string
  color: string
  name: string
}
