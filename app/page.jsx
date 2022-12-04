import Search from './components/search/search'
import List from './components/list/list';

export default async function Home() {

  return (
    <>
      <Search />
      <List
        title='Trending'
        category='trending'
        type='trending'
      />
      <List
        title='Recommendations for you'
        category='recommended'
        type='list'
      />
    </>
  )
}
