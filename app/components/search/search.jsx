'use client';
import { useEffect, useState } from 'react';
import SearchIcon from '../../../public/assets/images/icon-search.svg'

const Search = () => {

  const [formInput, setFormInput] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputs = (event) => {
    let {name, value} = event.target;
    setFormInput({...formInput, [name]: value});
    setSearchTerm(event.target.value);
  }

  const search = async (event) => {
    event.preventDefault()
    let media = data;
  }

  return (
    <div className='search'>
      <SearchIcon />
      <form onSubmit={search}>
        <input
          type="text"
          placeholder='Search for Movies or TV series'
          className='-search'
          id='search'
          name='searchTerm'
          value={searchTerm}
          onChange={handleInputs}
          required
        />
      </form>
    </div>
  );
}

export default Search;