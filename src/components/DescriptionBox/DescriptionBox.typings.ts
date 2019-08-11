import { CardType } from 'antd/lib/card/index.d'

export interface DescriptionBoxProps {
  editingDescription?: boolean
  editingName?: boolean
  title: React.ReactNode
  type?: CardType
}
