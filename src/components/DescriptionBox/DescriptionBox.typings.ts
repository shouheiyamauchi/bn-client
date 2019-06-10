import { CardType } from 'antd/lib/card/index.d'

export interface DescriptionBoxProps {
  editingDescription?: boolean
  editingTitle?: boolean
  title: React.ReactNode
  type?: CardType
}
