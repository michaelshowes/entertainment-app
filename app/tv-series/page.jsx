import Search from '../components/search/search'
import List from '../components/list/list'

export default function Home() {

  return (
    <>
      <Search />
      <List
        title='TV Series'
        category='tv-series'
        type='list'
      />
    </>
  )
}
