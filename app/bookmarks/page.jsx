import List from '../components/list/list';

export default async function Home() {

  return (
    <>
      <List
        title='Movies'
        category='movies'
        isBookmarked='true'
        type='list'
      />
      <List
        title='TV Series'
        category='tv-series'
        isBookmarked='true'
        type='list'
      />
    </>
  )
}
