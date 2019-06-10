import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import AnchorLinks from '~src/components/AnchorLinks/AnchorLinks'
import Loading from '~src/components/Loading/Loading'
import NestedCategory from '~src/components/NestedCategory/NestedCategory'
import { CategoriesContext } from '~src/contexts/Categories/Categories'
import { categories } from '~src/dummy'

const NestedCategories: React.FC<RouteComponentProps<{ pageId?: string }>> = ({
  match: {
    params: { pageId = 'home' }
  }
}) => {
  const [loading, setLoading] = React.useState(true)
  const { pages, setPage } = React.useContext(CategoriesContext)

  React.useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setPage(pageId, categories)
      setLoading(false)
    }, 500)
  }, [pageId])

  if (!pages[pageId]) {
    return <Loading show={true} />
  }

  return (
    <>
      <AnchorLinks pageId={pageId} />
      <Loading show={loading} />
      <NestedCategory {...pages[pageId]} pageId={pageId} parentId={pageId} />
    </>
  )
}

export default NestedCategories
