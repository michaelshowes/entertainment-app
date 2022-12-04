import Media from '../media/media';
import { getAllMedia } from '../../../util/fetch';

export default async function List({ title, category, type, isBookmarked }) {

  // Filters out trending media (for Recommended)
  async function getList() {
    const media = await getAllMedia();

    if (category === 'recommended') {
      const filtered = media.filter((item) => !item.isTrending)
      return filtered;
    }
    if (category === 'trending') {
      const filtered = media.filter((item) => item.isTrending)
      return filtered;
    }
    else if (category === 'movies') {
      const filtered = media.filter((item) => item.category == 'Movie');
      return filtered;
    }
    else if (category === 'tv-series') {
      const filtered = media.filter((item) => item.category == 'TV Series')
      return filtered;
    }
    else if (category === 'movies' && isBookmarked === 'true') {
      const filtered = media.filter((item) => item.category == 'Movie' && item.isBookmarked);
      return filtered;
    }
    else if (category === 'tv-series' && isBookmarked === 'true') {
      const filtered = media.filter((item) => item.category == 'TV Series' && item.isBookmarked)
      return filtered;
    }
    else
      return media;
  }

  const items = await getList();

  return (
    <section className={`list ${category='trending' ? 'trending' : ''}`}>
      <h2 className='h-l'>{ title }</h2>
      <div className={`${type}-thumbnail-container ${category='trending' ? 'is-trending' : ''}`}>
        {items.map((item) => {
          return (
            <Media
              key={item._id}
              title={item.title}
              year={item.year}
              category={item.category}
              rating={item.rating}
              isBookmarked={item.isBookmarked}
              isTrending={item.isTrending}
              image={type === 'list' ? item.thumbnail.regular.large : item.thumbnail.trending.large}
            />
          )
        })}
      </div>
    </section>
  );
}