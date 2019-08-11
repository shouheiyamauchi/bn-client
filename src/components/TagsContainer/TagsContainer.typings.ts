export interface TagsContainerProps {
  parentId: string
  tags: Tag[]
  wrapline?: boolean
  onClose?: (tagId: string) => void
}

export interface Tag {
  color: string
  id: string
  name: string
}
