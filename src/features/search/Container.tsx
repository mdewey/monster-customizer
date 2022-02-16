import React, {useState, useCallback} from 'react';

import {getSearchResults} from './search.api'

const Container = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async () => {
    setIsLoading(true);

   const resp = await getSearchResults(search);
   const json = await resp.json();
   console.log({json});
   setResults(json.results);
   setIsLoading(false);
  },[search]);

  const handleClick = (monster:any) =>{
    console.log({monster});
  }

  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          console.log(e.target.value);
          setSearch(e.target.value);
        }}
        value={search}
      />
      <button onClick={handleSearch}>search</button>
    </div>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        {results.map((result,i) => (
          <div key={i}>
            <button onClick={() => handleClick(result)}>
              {result.name}
            </button>
          </div>
        ))}
      </div>
    )}
    </>
  );
};

export default Container;