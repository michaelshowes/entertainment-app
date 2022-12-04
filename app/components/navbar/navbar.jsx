import Logo from '../../../public/assets/images/logo.svg';
import NavHome from '../../../public/assets/images/icon-nav-home.svg';
import NavMovies from '../../../public/assets/images/icon-nav-movies.svg';
import NavTV from '../../../public/assets/images/icon-nav-tv-series.svg';
import NavBookmark from '../../../public/assets/images/icon-nav-bookmark.svg';
import Image from 'next/image';
import Link from 'next/link';

const images = '/assets/images/';

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className="navbar-inner">

        {/* Logo */}
        <div className="logo">
          <Link href='/'>
            <Logo
              // width={25}
            />
          </Link>
        </div>

        {/* Nav */}
        <nav className='nav'>

          <Link href='/'>
            <NavHome />
          </Link>

          <Link href='/movies'>
            <NavMovies />
          </Link>

          <Link href='/tv-series'>
            <NavTV />
          </Link>

          <Link href='/bookmarks'>
            <NavBookmark />
          </Link>

        </nav>

        {/* Avatar */}
        <div className="profile">
          <Link href='/'>
            <Image
              src={`${images}image-avatar.png`}
              width={24}
              height={24}
              alt='profile image'
            />
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;