import Image from 'next/image';
import Movie from '../../../public/assets/images/icon-nav-movies.svg';
import TV from '../../../public/assets/images/icon-nav-tv-series.svg';
import BookmarkFull from '../../../public/assets/images/icon-bookmark-full.svg';
import BookmarkEmpty from '../../../public/assets/images/icon-bookmark-empty.svg';

const Media = ({ title, year, category, rating, isBookmarked, isTrending, image }) => {
  return (
    <article className={`media ${isBookmarked ? 'is-bookmarked' : ''}`}>
      <button className='bookmark'>
        {isBookmarked ? (
          <BookmarkFull fill='white' width={12} />
        ) : (
          <BookmarkEmpty fill='white' width={12} />
        )}
      </button>
      <div className='thumbnail'>
        <Image
          src={image}
          fill
          alt={`Thumbnail image for ${title}`}
        />
      </div>
      <div className="details">
        <div className="meta">
          <div className="year">{year}</div><span className="bullet">&bull;</span>
          <div className="category">
            <span className="category-icon">
              {category === 'Movie' ? (
                <Movie fill='white' width={10} />
              ) : (
                <TV fill='white' width={10} />
              )}
            </span>
            {category}
          </div><span className="bullet">&bull;</span>
          <div className="rating">{rating}</div>
        </div>
        <h3 className="title h-xs">{title}</h3>
      </div>
    </article>
  );
}

export default Media;