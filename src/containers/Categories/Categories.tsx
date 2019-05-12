import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import AnchorLinks from '~src/components/AnchorLinks/AnchorLinks'
import Category from '~src/components/Category/Category'
import Loading from '~src/components/Loading/Loading'
import { CategoriesContext } from '~src/contexts/Categories/Categories'
import { categories } from '~src/dummy'

const Categories: React.FC<RouteComponentProps<{ pageId?: string }>> = ({
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
      <Category {...pages[pageId]} pageId={pageId} parentId={pageId} />
    </>
  )
}

export default Categories
