import React, {useState, useCallback} from 'react';

import {getSearchResults} from './search.api'
import {  useAppDispatch } from '../../app/hooks';


import {selectMonster, fetchCreatureBySlug} from '../data/app.splice'

const Container = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Array<any>>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSearch = useCallback(async () => {
    setIsSearchLoading(true);

   const resp = await getSearchResults(search);
   const json = await resp.json();
   console.log({json});
   setResults(json.results);
   setIsSearchLoading(false);
  },[search]);

  const handleClick = (monster:any) =>{
    console.log({monster});
    dispatch(selectMonster(monster));
    console.log("firing fetchCreatureBySlug");
    dispatch(fetchCreatureBySlug(monster.slug));
  }

  return (
    <>
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      <button onClick={handleSearch}>search</button>
    </div>
    {isSearchLoading ? (
      <div>Loading...</div>
    ) : (
      <div className="results-list">
        {results.map((result,i) => (
          <div key={i}>
            <button onClick={() => handleClick(result)}>
              {result.name} ({result.slug})
            </button>
          </div>
        ))}
      </div>
    )}
    </>
  );
};

export default Container;